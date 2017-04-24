'use strict'

const db = require('APP/db')
    , {User, Product, Favorite, Order, OrderItem, Review, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    products: products(),
  }

  seeded.favorites = favorites(seeded)
  seeded.orders = orders(seeded)
  seeded.orderItems = orderItems(seeded)
  seeded.reviews = reviews(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  stef: {
    email: 'stef@email.com',
    name: 'Stefanie Sundby',
    password: '1234',
  },
  maria: {
    name: 'Maria Schreiber',
    email: 'maria@email.com',
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

const placeholderUrl = 'http://nord.imgix.net/Zoom/0/_7493060.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=860&h=924&q=60'

const products = seed(Product, {
  converse: {
    title: 'Chuck Taylor Low Top',
    description: 'Even little ones need their own Chucks. The classic Chuck Taylor was first designed in 1917 as a performance basketball shoe.',
    price: 30,
    photoUrl: 'http://nord.imgix.net/Zoom/0/_7493060.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=860&h=924&q=60',
    quantity: 50,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  booties: {
    title: 'Thea Twinkle Bootie',
    description: 'A glitter-dusted finish and warm faux-fur cuff add playful pizzazz to a cute crib shoe finished with a comfy and flexible leather sole.',
    price: 38,
    photoUrl: 'http://nord.imgix.net/Zoom/11/_13050391.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  moc_booties: {
    title: 'Sparrow Boot',
    description: 'An adorable moc-stitched suede bootie features a plush, fold-over shearling cuff guaranteed to keep little feet deliciously cozy.',
    price: 60,
    photoUrl: 'http://nord.imgix.net/Zoom/10/_10546230.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  rain_boots: {
    title: 'Sandor Rain Boot',
    description: 'Little boots with a fun mix of prints and a glossy finish feature an easily adjustable hook-and-loop closure for a comfy fit.',
    price: 36,
    photoUrl: 'http://nord.imgix.net/Zoom/6/_100768326.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  pink_boots: {
    title: 'Classic Fur Bootie',
    description: 'A cozy slip-on bootie stays put with an elasticized ankle design, skid-resistant suede sole and soft, flexible leather upper.',
    price: 38,
    photoUrl: 'http://nord.imgix.net/Zoom/1/_8257041.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  shark_shoes: {
    title: 'Dino Dan Crib Shoe',
    description: 'Toothy sharks add playful aquatic charm to soft, flexible crib shoes topped with stay-put elastic cuffs.',
    price: 26,
    photoUrl: 'http://nord.imgix.net/Zoom/12/_10243312.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  spotty_mocs: {
    title: 'Dalmatian Moccasin',
    description: 'Rose-gold metallic fringe and cute dalmatian spots make this moccasin-style crib shoe an instant favorite.',
    price: 49,
    photoUrl: 'http://nord.imgix.net/Zoom/19/_13233279.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  moccasins: {
    title: 'Classic Moccasin',
    description: 'A kiltie fringe makes a cute accent on a soft, supple leather moccasin perfectly sized for little feet.',
    price: 60,
    photoUrl: 'http://nord.imgix.net/Zoom/13/_100429853.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Infant', 'Newborn', 'Toddler']
  },
  nikes: {
    title: 'Air Max Thea Sneaker',
    description: 'A signature Nike Swoosh adds a pop of color to a lightweight, minimalist sneaker fashioned with runner-inspired detailing.',
    price: 55,
    photoUrl: 'http://nord.imgix.net/Zoom/2/_13318742.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 75,
    category: ['Newborn', 'Toddler']
  },
  sandals: {
    title: 'Sandals',
    description: 'Tiny sandals for sunny days.',
    price: 36,
    photoUrl: 'http://nord.imgix.net/Zoom/5/_100428605.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Infant', 'Toddler']
  },
  toms: {
    title: 'Chambray Slip-On',
    description: 'Classic chambray keeps warm-weather looks cool and casual in an essential slip-on featuring an adjustable tab at the vamp.',
    price: 35,
    photoUrl: 'http://nord.imgix.net/Zoom/6/_100544226.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=860&h=924&q=60',
    quantity: 100,
    category: ['Infant', 'Toddler']    
  },
  adventure_shoes: {
    title: 'Sam Customizable Sneaker',
    description: 'A breezy, customizable sneaker is designed to stay comfortable on the go with a shock-absorbing, antimicrobial Eco-OrthoLite® footbed.',
    price: 50,
    photoUrl: 'http://nord.imgix.net/Zoom/19/_100531579.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 70,
    category: ['Newborn', 'Infant', 'Toddler']   
  },
  jellies: {
    title: 'Campana Mary Jane',
    description: 'A sparkly, fruit-scented jelly flat with playful retro charm has a hook-and-loop mary-jane strap for easy on and off.',
    price: 55,
    photoUrl: 'http://nord.imgix.net/Zoom/7/_12130907.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 150,
    category: ['Newborn', 'Infant', 'Toddler']   
  },
  preppy_sneakers: {
    title: 'Lacoste Evo Sneaker',
    description: 'A signature croc at the side and heel brand a comfy low-top sneaker with a croc-texture finish and a grippy cupsole to help promote confident early steps.',
    price: 60,
    photoUrl: 'http://nord.imgix.net/Zoom/13/_100867873.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Toddler']
  },
  red_grey_sneakers: {
    title: 'Tanner Sneaker',
    description: 'A sporty, versatile sneaker is designed with young adventurers in mind, featuring an easy-on hook-and-loop strap and rubber toe bumper to protect little feet.',
    price: 40,
    photoUrl: 'http://nord.imgix.net/Zoom/14/_12120074.jpg?fit=fill&bg=FFF&fm=jpg&trim=color&trimcolor=FFF&trimtol=20&w=780&h=838&q=60',
    quantity: 100,
    category: ['Newborn', 'Infant', 'Toddler']
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
    'stef loves booties': {
      user_id: users.stef.id,
      product_id: products.booties.id
    },
    'stef loves jellies': {
      user_id: users.stef.id,
      product_id: products.jellies.id
    },
    'stef loves mocs': {
      user_id: users.stef.id,
      product_id: products.moccasins.id
    },
    'fanny loves nikes': {
      user_id: users.fanny.id,
      product_id: products.nikes.id
    },
    'maria loves sandals': {
      user_id: users.maria.id,
      product_id: products.sandals.id
    },
    'maria loves red_grey_sneakers': {
      user_id: users.maria.id,
      product_id: products.red_grey_sneakers.id
    },
    'tina loves shark_shoes': {
      user_id: users.maria.id,
      product_id: products.shark_shoes.id
    },
    'tina loves converse': {
      user_id: users.tina.id,
      product_id: products.converse.id
    },
    'ashi loves booties': {
      user_id: users.ashi.id,
      product_id: products.booties.id
    },
    'ben loves nikes': {
      user_id: users.ben.id,
      product_id: products.nikes.id
    },
  })
)

const orders = seed(Order,
  ({users}) => ({
    'bens nike order': {
      status: 'Pending',
      user_id: users.ben.id
    },
    'ashis booties order': {
      status: 'Completed',
      user_id: users.ashi.id
    },
    'stefs order': {
      status: 'Pending',
      user_id: users.stef.id
    }
  })
)

const orderItems = seed(OrderItem,
  ({products, orders}) => ({
    'bens order': {
      quantity: 1,
      product_id: products.nikes.id,
      order_id: orders['bens nike order'].id
    },
    'ashis order': {
      quantity: 2,
      product_id: products.booties.id,
      order_id: orders['ashis booties order'].id
    },
    'stefs jellies order': {
      quantity: 2,
      product_id: products.jellies.id,
      order_id: orders['stefs order'].id
    },
    'stefs rain boots order': {
      quantity: 1,
      product_id: products.rain_boots.id,
      order_id: orders['stefs order'].id
    }
  })
  )

const reviews = seed(Review,
  ({users, products}) => ({
    'bens nikes review': {
      rating: '4',
      content: 'I love these but they\'re not good for interviews',
      user_id: users.ben.id,
      product_id: products.nikes.id
    },
    'stefs booties review': {
      rating: '5',
      content: 'These booties are so cute!',
      user_id: users.stef.id,
      product_id: products.booties.id
    }
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

module.exports = Object.assign(seed, {users, products, favorites, orders, orderItems, reviews})
