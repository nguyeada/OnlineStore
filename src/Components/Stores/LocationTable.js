import React from 'react';
import LocationRow from './LocationRow';


function LocationTable({stores}) {
    return(
        <table>
            <caption>Locations of Beaver Mart</caption>
            <thead>
                <tr>
                    <th>City:</th>
                    <th>State:</th>
                    <th>Zip Code:</th>
                </tr>
            </thead>
            <tbody>
                {stores.map((store,i)=> <LocationRow store={store} key={i}/>)}
            </tbody>
        </table>
    );
}
export default LocationTable;