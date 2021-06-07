import React from 'react';
import {Link} from 'react-router-dom';

const CovidLayout=()=>{

    return(

        <>
      
        <h1 className='layOut'>
        <marquee scrollamount='10'>
        Covid Cases In India ....
        </marquee>
        </h1>
        <br/><br/>
        <div className='link'>
        <Link to='india' id='ind'>India 🏳‍🌈</Link><br/>
        <Link to='state' id='st'>StateWise 🏝</Link>
        </div>


        

        </>
    );

}

export default CovidLayout;