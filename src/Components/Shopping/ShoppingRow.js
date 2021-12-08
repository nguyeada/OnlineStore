import React from 'react';
import SelectQuantity from './SelectQuantity'

function ShoppingRow({ item }) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><SelectQuantity/></td>
        </tr>
    );
}
export default ShoppingRow;