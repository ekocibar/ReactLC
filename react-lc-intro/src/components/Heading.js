import React from 'react';
// import HHH from './myStyles'    // only works export default
// import {bold, red} from './myStyles'  // THE EXACT NAME REQUIRED
import * as LC from './myStyles'

// import hhh from './myStyles'
// import {red} from './myStyles'

const course = "LiveCoding"
const OzelString = `  burasi ozel ${course}   `
const date = new Date()

const bold = {
    fontWeight:"bold",
    fontFamily:"Times New Roman"
} 


const Heading = () => {
    return (
        <div>
            <img src="https://livecoding.nl/img/livecoding/lc-horizontal.svg"
                alt="LC" className="image" style={{float:"right"}}></img>
            <div className="code" >Bu sekilde variable llari pass edebiliyoruz {course}</div>
            <div style={{color:"red", fontSize:"2em"}}>Basit operations  {3 + 5}</div>
            <div style= {LC.bold}>{`Bu ozel sring  ${course}`}</div>
            
            <div style={LC.red}>{OzelString}</div>

            <div>Su sekilde if else olur TERNARY OPERATOR  {course === "LiveCoding" ? "AA":"BB"}</div>
            <div> Instance lar burada direk olarak kullanilabilir {new Date().getUTCMilliseconds()}</div>
            <div> Bu skeilde de olur {date.getUTCFullYear()}</div>

        </div>
    );
};

//<div>Normalde If else  yapilmaz {if(course == "LiveCoding") {return "AA"} }</div>

export default Heading;