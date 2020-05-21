# Boxed-All-Bulk-Cart

# Summary

Ever use an online super-store like Amazon or Boxed? As a design exercise, we've tried to implement our own version of the Boxed online store, but with some informational pop-ups that direct the user to either the All-bulk (warehouse items) store or the Express (grocery shopping service) store. We also implement corresponding separate shopping carts to improve the shopper's experience.

We also incorporate a database where products can be added to, edited and deleted from. The webpage will pull products from this database and display them for users. A secret administrator page will be used to edit products. Potential administrators will be given an invite code in order to make an administrator account.

Built using MERN stack: MongoDB, Express, React, Nodejs

# Team Members

#### Software Engineering Immersive (SEI)
1. Andre Gonzalez
2. Andrew Hsu
3. Tom Moliterno
4. Luke Sweeney

#### User Experience (UX)
1. Taylor Davenport
2. Bengisu Halezeroglu
3. Tara Jung

# App Design 

## MVP Features 
Our main MVP features revolve around the following two goals: (1) creating a functional full-stack app that allows users to browse products in the store, which are served from the database, and (2) employing the features designed by the UX team in their project to enhance the user experience of the Boxed.com site. 

#### App MVP
* React frontend deployed to Surge
* Express backend deployed to Heroku, with MongoDB Atlas database connection
* Ability to read products from database via API endpoint
* Administrator ability to create, update and delete products from database via API endpoint and valid JSON web token
* Hand-rolled JSON web token authentication system in Express backend
* React components that route to different pages (products, productDetails, login) that have different API calls
* Styling based on UX mockups and Boxed.com aesthetics

#### UX Features
The UX team provided a set of mockups, both detailing the components and styling for the Boxed.com site, as well as the new features they wanted to introduce.

[Mockups in Zeplin](https://scene.zeplin.io/project/5ea47ccc58a80025db2899bb)

##### Feature 1: Home popup
The purpose of this mockup is to distinguish the two different stores or services of Boxed.come. The first is All-Bulk, which is bulk purchasing which is shipped from their warehouses. The second is Express, which is a shopping or grocery service where a local affiliate purchases the items and delivers them to the customer's home.

![Feature 1: Boxed homepage popup](https://scene.zeplin.io/project/5ea47ccc58a80025db2899bb/screen/5ea47de08b7dc7272d15114d)

##### Feature 2: Add to cart popup
When a customer wants to order an item, it may be out of stock or undeliverable in the period between ordering and shipping. This feature was designed to ask if the customer would like a replacement to be shipped if the original were not available (and to be charged/refunded appropriately and automatically) after clicking the "Add to cart" button on the product details page.

![Feature 2: Boxed add to cart popup](https://scene.zeplin.io/project/5ea47ccc58a80025db2899bb/screen/5ea47de08b7dc7272d15114d)

##### Feature 3: Bulk and Express shopping carts 
In Boxed.com's current implementation, the shopping cart is one column and both Bulk and Express orders are added to it. This may become confusing to users because the two carts still need to be checked out separately. This double column design helps users see the difference between their two carts.

![Feature 3: Boxed Bulk and Express shopping carts](https://scene.zeplin.io/project/5ea47ccc58a80025db2899bb/screen/5ea47de033694a2667fbeae7)

# Development

## Trello Board

[Development Trello Board](https://trello.com/b/OVCriFYj/ga-sei-apollo-project-3-boxed)

## Code Examples And References

#### Example for product schema and thumbnail
```js
  {
    name: 'Capn Crunch Pancake Mix',
    images: [
      "https://i.imgur.com/aJIBBDK.jpg",
      "https://i.imgur.com/hqxVr7Q.jpg",
      "https://i.imgur.com/BAe5mwe.jpg",
      "https://i.imgur.com/3z1wuuc.png"
    ],
    description: 'Yummy in my tummy :) Some assembly required.',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategories: 'cereal & breakfast'
   }
```
