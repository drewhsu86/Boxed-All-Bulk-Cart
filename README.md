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
[Mockups in Zeplin](https://scene.zeplin.io/project/5ea47ccc58a80025db2899bb)

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
