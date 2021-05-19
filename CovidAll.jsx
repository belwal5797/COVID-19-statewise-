import React, { useEffect, useState } from 'react';

const CovidAll=()=>{
     
        const [data,setData]=useState([]);
        const getCovidData=async()=>{
            try{
                const res=await fetch('https://api.covid19india.org/data.json');
                const data=await res.json();
                console.log(data);
                setData(data.statewise);
      
              }
      
              catch(err){
                   console.log(err);
              }
        }
   
            useEffect(()=>{
             getCovidData();
            },[]); 
       
    return(

        <>
       <h1>India Covid-19 All State Dashboard</h1>

       <div>
           <table id='tab'>

           <tr>
               <th>State</th>
               <th>Confirmed</th>
               <th>Recovered</th>
               <th>Deaths</th>
               <th>Active</th>
               <th>Updated</th>
           </tr>
              
             {
                 data.map((elem,i)=>{
                     return(
                     <tr key={i}>
                        <th>{elem.state}</th>
                        <td id='c'>{elem.confirmed}</td>
                        <td id='r'>{elem.recovered}</td>
                        <td id='d'>{elem.deaths}</td>
                        <td id='a'>{elem.active}</td>
                        <td id='u'>{elem.lastupdatedtime}</td>
                     </tr>
                     )
                 })
             }

          


           
           </table>
       </div>
        </>
    );
}

export default CovidAll;