import { MdAdd, MdRemove} from 'react-icons/md';
import React, {useState} from 'react';

function SelectQuanity() {
    const [quantity, setQuantity]= useState(0);
    const incrementQuantity=()=> {
        if (quantity<10)
        setQuantity(quantity+1);}
    const decrementQuantity=()=> {
        if(quantity>0)
        setQuantity(quantity-1);}

    return(
        <>
            <MdAdd onClick={incrementQuantity}>
                
            </MdAdd>
            <span>{quantity}</span>
            <MdRemove onClick={decrementQuantity}>

            </MdRemove>
        </>
    );
}
export default SelectQuanity;