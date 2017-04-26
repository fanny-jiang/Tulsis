const request = require('supertest')
  , { expect } = require('chai')
  , db = require('APP/db')
  , app = require('./start')
  , Product = db.model('products')

/* global describe it before afterEach */

describe('/api/products', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /', () =>
    describe('responds with 200 or an empty set of products', () =>
      it('responds with a status of 200 with products or an empty set', () =>
        request(app)
          .get(`/api/products`)
          .expect(200)
      )))

  describe('GET /:id', () => {
    let id

    before(() => {
      return Product.create({
        title: 'Test Shoes',
        price: 1,
        quantity: 1
      })
        .then(product => {
          id = product.id
        })
    })

    describe('when a product exists', () =>
      it('it returns the product', () =>
        request(app)
          .get(`/api/products/${id}`)
          .expect(200)
          .then(res => {
            expect(res.body.title).to.be.equal('Test Shoes')
          })
          .catch(console.error)
      ))
  })

  describe('POST', () =>
    it('creates a product', () =>
      request(app)
        .post('/api/products')
        .send({
          title: 'booties',
          price: 12,
          quantity: 1
        })
        .expect(201)
    ))

  describe('PUT', () => {
    let id
    before(() => {
      return Product.create({
        title: 'booties',
        price: 12,
        quantity: 1
      })
        .then(product => {
          id = product.id
        })
    })
    it('updates a product', () => {
      request(app)
        .put(`/api/products/${id}`)
        .send({
          title: 'new booties',
          price: 24
        })
        .expect(200)
        .then(res => {
          expect(res.body.title).to.be.equal('new booties')
        })
    }

    )
  }
  )
})
