import React from 'react';
import LocationTable from './LocationTable';
import ZipCode from './ZipCode';

function StorePage({stores}){
    return(
        <>
            <LocationTable stores={stores}/>
            <ZipCode/>
        </>
    );
}
export default StorePage;