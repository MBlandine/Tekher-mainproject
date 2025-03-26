import React from "react";
import '../style.css/Shop.css'
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import image6 from '../assets/image6.webp'
import image7 from '../assets/image7.webp'
import image8 from '../assets/image8.webp'
import image9 from '../assets/image9.webp'
import image10 from '../assets/image10.webp'
import { TfiMenuAlt } from "react-icons/tfi";
import { PiDotsNineBold } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
export  const products = [
    {
        // id: 1,
        // image: image2,
        // title: "All in one bottle",
        // price: '$22.00 – $55.00',
        // ratings: 3,
        // color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'Out of Stock', 
        stock: '100',
        registered: 'May 15, 2021',
        country: 'Russia',
        group: 'Default',
        spent:'$34,392.10',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        // id: 2,
        // image: image3,
        // title: "Amazon Alexa",
        // price: "$49.00 – $69.00",
        // ratings: 4,
        // color: ["#6B705C", "#B08968", "#EDEDED"],
        status: '7 in Stock', 
        stock: '100',
        registered:'February 26, 2021',
        spent:'$25,486.20',
        country: 'Italy',
        group: 'Wholesaler',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        // id: 3,
        // image: image4,
        // title: "Headset Gamer Legion",
        // price: "$22.00 – $55.00",
        // ratings: 5,
        // color: ["#6B705C", "#B08968", "#EDEDED"],
        status: '2 in Stock', 
        stock: '100',
        registered:'August 17, 2021',
        spent:'$1,332.58',
        country: 'Germany',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 4,
        image: image5,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'On Backorder', 
        stock: '100',
        registered:'June 26, 2021',
        spent:'$28,522.35',
        country: 'Canada',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 5,
        image: image6,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: '1 in Stock', 
        stock: '100',
        registered:'	May 12, 2021',
        spent:'$911.27',
        country: 'Russia',
        group: 'Wholesaler',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 6,
        image: image7,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'Out of stock', 
        stock: '100',
        registered:'October 2, 2021',
        spent:'$35,762.74',
        country: 'China',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 7,
        image: image8,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'Preorder', 
        stock: '100',
        registered:'February 23, 2021',
        spent:'$5,702.02',
        country: 'China',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 8,
        image: image9,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: '3 in Stock', 
        stock: '100',
        registered:'September 28, 2021',
        spent:'$594.97',
        country: 'Ukraine',
        group: 'Wholesaler',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    },
    {
        id: 9,
        image: image10,
        title: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        ratings: 5,
        color: ["#6B705C", "#B08968", "#EDEDED"],
        status: 'Out of Stock', 
        stock: '123,400',
        registered:'December 31, 2021',
        spent:'$5,192.42',
        country: 'USA',
        group: 'Default',
        namevendor:"Josh Doe's Store",
        namecustomer:'Hamissi Afua',

    }

];


 const items = [
    {
      id: 1,
      name:'All In One Bottle',
      price:'$22.00-$55.00',
      rating: 5,
      colors: ["#EDEDED", "#000000", "#000000", "#B08968", "#EDEDED"],
      image: image2,
    },
    {
      id: 2,
      name: "Amazon Alexa",
      price: "$49.00 – $69.00",
      rating: 5,
      colors: ["#6B705C", "#B08968", "#EDEDED","#EDEDED", "#000000"],
      image: image3,

    },
    {
      id: 3,
      name: "Headset Gamer Legion",
      price: "$22.00 – $55.00",
      rating: 4,
      colors: ["#6B705C",  "#000000","#B08968", "#EDEDED"],
      image: image4,
    },
    {
        id: 4,
        name:'All In One Bottle',
        price:'$22.00-$55.00',
        rating: 4,
        colors: ["#EDEDED", "#000000", "#000000", "#B08968", "#EDEDED"],
        image: image5,
      },
      {
        id: 5,
        name: "Amazon Alexa",
        price: "$49.00 – $69.00",
        rating: 5,
        colors: ["#EDEDED", "#000000", "#000000", "#B08968", "#EDEDED"],
        image: image6,
  
      },
      {
        id: 6,
        name: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        rating: 4,
        colors: ["#6B705C", "#B08968", "#EDEDED","#EDEDED", "#000000"],
        image: image7,
      },
      {
        id: 7,
        name:'All In One Bottle',
        price:'$22.00-$55.00',
        rating: 4,
        colors: ["#6B705C",  "#000000","#B08968", "#EDEDED"],
        image: image8,
      },
      {
        id: 8,
        name: "Amazon Alexa",
        price: "$49.00 – $69.00",
        rating: 5,
        colors: ["#EDEDED", "#000000", "#000000", "#B08968", "#EDEDED"],
        image: image9,
  
      },
      {
        id: 9,
        name: "Headset Gamer Legion",
        price: "$22.00 – $55.00",
        rating: 4,
        colors: ["#6B705C", "#B08968", "#EDEDED","#EDEDED", "#000000"],
        image: image10,
      },
  ];

// const [price, setPrice] = React.useState(79);

// const handlePriceChange = (event) => {
//   setPrice(event.target.value);
// };

const Shop = () => {
   
    return (
        <div>

            <div class="indexhome">
                <h1 class="shop">Shop</h1>
                <img src={image1} alt="" />
            </div>
            <div class="cards">
                <div class="words">
                    <li>Categories</li>
                    <li>Body Lotion11 product</li>
                    <li>Computer Gadget33 products</li>
                    <li>Electronics55 products</li>
                    <li>Fashion33 products</li>
                    <li>General11 product</li>
                    <li>Shoes22 products</li>
                    <li>Sports33 products</li>
                    <li>Watch11 product</li>
                    <li>Woman Clothes(3)</li>


                    <h3>Color</h3>
                    <div className="color-options">
                     <span className="color" style={{ backgroundColor: "#c4b89a" }}></span>
                     <span className="color" style={{ backgroundColor: "#a67c52" }}></span>
                     <span className="color" style={{ backgroundColor: "#e0dfdf" }}></span>
                     <span className="color" style={{ backgroundColor: "#ffffff", border: "1px solid #ddd" }}></span>
                    </div>
                    <hr/>
                    <div className="ratings">
                     <h3>Ratings</h3>
                     <div className="rating-option">
                     <span className="stars">★★★★★</span>
                     <span className="count">(8)</span>
                     </div>
                     <div className="rating-option">
                     <span className="stars">★★★★☆</span>
                     <span className="count">(4)</span>
                     </div>
                     <div className="rating-option">
                     <span className="stars">★★★☆☆</span>
                     <span className="count">(1)</span>
                    </div>
                   </div>
                   <hr/>
                   <div className="price">
                   <h3>Price</h3>
                   <div className="price-range">
                     <input className="slider"  type="range" min='0' max='79' />
                     <div className="price-values">
                        <span className="price-box">$0</span>
                        <span className="price-box">$79</span>
                     </div>
                   </div>
                   </div>

                   
                   

                </div>
                <div>
                      
                         <div className="top-bar">
                            <span>Showing 1-9 of 13 results</span>
                            <select className="sort-dropdown">
                                <option>Default sorting</option>
                                <option>Sort by popularity</option>
                                <option>Sort by average rating</option>
                                <option>Sort by Latest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                            <div className="icons">
                            <TfiMenuAlt />
                            <PiDotsNineBold />
                            </div>
                            
                         </div>
                {/* <div class="product">
                    {products.map((product, index) => (
                        <div key={index}>
                            <img src={product.image} alt="" class="image" />
                            <div className="title"><h3>{product.title}</h3>
                                <h3>{product.price}</h3>
                                <div class="rating">
                                    {"★".repeat(product.ratings)}
                                    {"☆".repeat(5 - product.ratings)}
                                </div>
                                <div class="colors">
                                    {product.color.map((color, index) => (
                                        <span key={index} class="circle" style={{ backgroundColor:color }}></span>
                                    ))}</div>

                            </div>

                        </div>
                    ))}
                </div> */}



                     <div className="newcards">
                          {items.map((product) => (
                            <div className="product-card" key={product.id}>
                              <div className="card-images">
                                <img src={product.image} alt={product.name} />
                                <div className="overlay">
                                  <div className="heart"><GoHeart className='icon'/></div>
                                  <div className="select-option">Select Option</div>
                                  <div className="quick-view">Quick View</div>
                                </div>
                              </div>
                              <div className="card-details">
                                <h4>{product.name}</h4>
                                <p className="price">{product.price}</p>
                                <div className="stars">
                                  {"★".repeat(product.rating)}
                                  {"☆".repeat(5 - product.rating)}
                                </div>
                                <div className="color-options">
                                  {product.colors.map((color, index) => (
                                    <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
                                  ))}
                                </div>
                              </div>
                              </div>
                          ))}
                        </div>
                </div>
            </div>


        </div>
    )
}
export default Shop