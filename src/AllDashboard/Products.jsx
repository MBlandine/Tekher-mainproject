// import React from 'react'
// import '../style.css/Products.css'
// import { products } from '../components/Shop'
// import { CiMenuKebab } from "react-icons/ci";
// import { IoMdSearch } from "react-icons/io";

// const Products = () => {
//   return (
//     <div className='Orders'>
//           <div className='Orderstitle'>
//             <div><h2>Dashboard / Products</h2>
//             <h3>Products</h3>
//             </div>
            
//             <div className='icon'>New Product</div>
//           </div>
    
//           <div className='orderspage'>
//           <div className='search'> <IoMdSearch /> <input type='search' placeholder='Start typing to search for orders'/></div>
//           <div className='table'> 
//          <table>
//           <tr>
            
//             <th>Product</th>
//             <th>Category</th>
//             <th>Product</th>
//             <th>Category</th>
//             <th>Product</th>
//             <th>Category</th>
//             <th></th>
            
            
//           </tr>
          
//           {products.map((product, index) =>(
//                <tr key={index}>
               
//                <td><img src={product.image} alt="" class="image" /></td>
//                <td>{product.title}</td>
//                <td>{product.stock}</td>
//                <td>{product.status}</td>
//                <td>{product.price}</td>
//                <td><CiMenuKebab /></td>
//              </tr>
//           ))}
          
//             </table>
//           </div>
//           </div>
          
//         </div>
//   )
// }

// export default Products