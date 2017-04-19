'use strict'

const db = require('APP/db')
    , {User, Product, Favorite, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    products: products(),
  }

  seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  stef: {
    email: 'stefanie@email.com',
    name: 'Stefanie Sundby',
    password: '1234',
  },
  maria: {
    name: 'Maria Schreiber',
    email: 'maria2@email.com',
    password: '1234'
  },
  fanny: {
    name: 'Fanny Jiang',
    email: 'fanny@email.com',
    password: '1234'
  },
  tina: {
    name: 'Tina Heiligers',
    email: 'tina@email.com',
    password: '1234'
  },
  ben: {
    name: 'Ben Cohen',
    email: 'ben@email.com',
    password: '1234'
  },
  ashi: {
    name: 'Ashi Krishnan',
    email: 'ashi@email.com',
    password: '1234'
  },
  mariana: {
    name: 'Mariana Templin',
    email: 'mariana@email.com',
    password: '1234'
  },
})

const products = seed(Product, {
  converse: {
    title: 'converse',
    description: 'tiny converse sneakers',
    photoUrl: '/url/converse',
    quantity: 50,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  booties: {
    title: 'booties',
    description: 'tiny bootie boots',
    photoUrl: '/url/booties',
    quantity: 100,
    category: ['Infant', 'Newborn']
  },
  nikes: {
    title: 'nikes',
    description: 'tiny nike sneakers',
    photoUrl: '/url/nikes',
    quantity: 75,
    category: ['Newborn', 'Toddler']
  },
  sandals: {
    title: 'sandals',
    description: 'tiny sandals for sunny days',
    photoUrl: '/url/sandals',
    quantity: 100,
    category: ['Infant', 'Toddler']
  }
})

const favorites = seed(Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({users, products}) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'mariana loves sandals': {
      user_id: users.mariana.id,    // users.barack is an instance of the User model
                                   // that we created in the user seed above.
                                   // The seed function wires the promises so that it'll
                                   // have been created already.
      product_id: products.sandals.id  // Same thing for products.
    },
    'god is into smiting': {
      user_id: users.god.id,
      product_id: products.smiting.id
    },
    'obama loves puppies': {
      user_id: users.barack.id,
      product_id: products.puppies.id
    },
    'god loves puppies': {
      user_id: users.god.id,
      product_id: products.puppies.id
    },
  })
)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, products, favorites})
