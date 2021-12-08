import React from 'react';
import ShopTable from './ShopTable'

function ShoppingPage({items}){
    return(
        <>
            <ShopTable items={items}/>
        </>  
    );
}
export default ShoppingPage;