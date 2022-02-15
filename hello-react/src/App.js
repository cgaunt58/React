
import React from 'react'
import { Component } from 'react';
import HeadingList from './components/HeadingList';
import "./App.css"
import ReviewsList from './components/Reviews';
import ProductsList from './components/Products';
import SocialList from './components/Social';
import ProductsList2 from './components/Products2';

class App extends Component {

  render() {

    const heading = [
      {name1: 'HighOnCoding'},
      {name2: 'Home'},
      {name3: 'Categories'}
    ]
 
    const reviews = [
      {title: ' Curse of the Current Reviews'},
      {body: 'When you want to buy any application from the Apple iTunes store you have more hoices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important facotrs price, screenshot and reviews. '}
    ]

    const products = [
      {title1:'Hello WatchKit'},
      {title2:'Introduction to Swift'},
      {body1: 'Last monsth Apple released the anticipated WatchKit Framework for devolpers in the form of IOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and devloping apps for the Apple Watch.'},
      {body2: 'Swift is a modern programming language devolped by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly relfects the intentions of the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started'}
    ]

    const social = [
      {name: 'comments'},
      {numOfcomments:' 12'},
      {secondName: 'Likes'},
      {numOflikes: '124'}
    ]

    const products2 = [
      {title:'Introduction to Swift'},
      {body: 'Swift is a modern programming language devolped by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly relfects the intentions of the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started'}
    ]
  



    return(
      <div>
       <ul>
         <HeadingList allHeadings = {heading}/>
         <br></br>
         <ReviewsList allReviews = {reviews}/>
         <br></br>
         <ProductsList allProducts = {products} />
         <SocialList allSocials = {social} />
         <br></br>
         <ProductsList2 allProducts = {products} />  
         <SocialList allSocials = {social} />


       </ul>
      </div>
    )
  }


}

export default App