// import React from 'react'
// import '../style.css/Customers.css'
// import { products } from '../components/Shop'
// import { CiMenuKebab } from "react-icons/ci";
// import { IoMdSearch } from "react-icons/io";

// const Customers = () => {
//   return (
//      <div className='Orders'>
//               <div className='Orderstitle'>
//                 <div><h2>Dashboard / Customers</h2>
//                 <h3>Customers</h3>
//                 </div>
                
//                 <div className='icon'>New Customer</div>
//               </div>
        
//               <div className='orderspage'>
//               <div className='search'> <IoMdSearch /> <input type='search' placeholder='Start typing to search for customers'/></div>
//               <div className='table'> 
//              <table>
//               <tr>
//                 <th></th>
//                 <th></th>
//                 <th>Name</th>
//                 <th>Registered</th>
//                 <th>Country</th>
//                 <th>Group</th>
//                 <th>Spent</th>
                
//                 <th></th>
//               </tr>
              
//               {products.map((product, index) =>(
//                    <tr key={index}>
                   
//                    <td><img src={product.image} alt="" class="image" /></td>
//                    <td>{product.namecustomer}</td>
//                    <td>{product.registered}</td>
//                    <td>{product.country}</td>
//                    <td>{product.group}</td>
//                    <td>{product.spent}</td>
//                    <td><CiMenuKebab /></td>
//                  </tr>
//               ))}
              
//                 </table>
//               </div>
//               </div>
              
//             </div>
//   )
// }

// export default Customers