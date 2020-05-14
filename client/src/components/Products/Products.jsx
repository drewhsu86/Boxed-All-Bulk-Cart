import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'


const productsData = [
  {
    name: 'Product 001',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategory: 'cereal & breakfast'
  },
  {
    name: 'Product 002',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategory: 'cereal & breakfast'
  },
  {
    name: 'Product 003',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategory: 'cereal & breakfast'
  },
  {
    name: 'Product 004',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategory: 'cereal & breakfast'
  },
  {
    name: 'Product 005',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategory: 'cereal & breakfast'
  },
  {
    name: 'Product 006',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategory: 'cereal & breakfast'
  }
]



class Products extends Component {
  render() {
    return (
      <>
        <div>Products List</div>
        <SideBar />
      </>
    )
  }
}



export default Products