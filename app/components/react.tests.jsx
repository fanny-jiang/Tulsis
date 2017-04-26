import React from 'react'
import {createStore} from 'redux'
import {range, last} from 'lodash'
import chai, {expect} from 'chai'
import mocha from 'mocha'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme)
import {shallow} from 'enzyme'
import {spy} from 'sinon'
import faker from 'faker'
import randomCat from 'random-cat'
import Product from './Product'

const createRandomProducts = amount => {
  return range(0, amount).map(index => {
    return {
      id: index + 1,
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      price: Math.floor(Math.random() * 10),
      photoUrl: randomCat.get(),
      quantity: Math.floor(Math.random() * 100),
      category: ['Infant', 'Toddler', 'Newborn']
    }
  })
}
const testUtilities = {
  createRandomProducts,
  createOneRandomProduct: () => createRandomProducts(1)[0]
}

describe('***React tests***', function() {
  describe('Product', () => {
    describe('visual content', () => {
      let productData, productWrapper
      beforeEach('Create <Product /> wrapper', () => {
        productData = {
          id: 5,
          title: 'Fluffy booties',
          description: 'Warm, comfy, cosy',
          price: 8,
          photoUrl: 'http://lorempixel.com/100/600/cats',
          quantity: 2,
          category: ['Infant']
        }
        productWrapper = shallow(<Product product={productData} />)
      })

      xit('includes the product title as an h4', () => {

        // expect(productWrapper.find('div').to.have.html('className: "main-containter"'))
      })

      xit('includes the product description as a span', () => {
        // expect(productWrapper.find('span').to.have.html('<p>$8.00</p>'))
      })

      xit('is changes with product change', () => {
        const aDifferentProduct = {
          id: 6,
          title: 'Leather slippers',
          description: 'Practical, enduring',
          price: 9,
          photoUrl: 'http://lorempixel.com/100/600/cats',
          quantity: 1,
          category: ['Toddler']
        }
        const differentProductWrapper = shallow(<Product product={aDifferentProduct} />)
        // expect(differentProductWrapper.find('h4').to.have.html('<h4>Leather slippers</h4>'))
        // expect(differentProductWrapper.find('span').to.have.html('<p>$9.00</p>'))
      })
    })
  })
})
