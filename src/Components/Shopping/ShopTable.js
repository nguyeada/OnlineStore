import React from 'react';
import ShoppingRow from './ShoppingRow';


function ShopTable({items}) {
    return(
        <>
            
            <table>
                <caption>Select the quantity of the items you want to buy</caption>
                <thead>
                    <tr>
                        <th>Item:</th>
                        <th>Price:</th>
                        <th>Quantity:</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item,i)=> <ShoppingRow item={item} key = {i}/>)}
                </tbody>
            </table>
        </>
    );

}
export default ShopTable;