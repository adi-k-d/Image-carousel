import React,{useState} from 'react'

const Categories = () => {
    
    
  const categories = [
    {Category: 'Fashion', Number:6,},
    {Category: 'Film', Number:6,},
    {Category: 'Food', Number:6,},
    {Category: 'Media', Number:6,},
    {Category: 'Health', Number:6,},
    {Category: 'Fashion', Number:6,},
    {Category: 'Film', Number:6,},
    {Category: 'Food', Number:6,},
    {Category: 'Media', Number:6,},
    {Category: 'Health', Number:6,},
  ]
  
  
  const getImg=5;
  
        
          return (
            <section className = "categories">
             
      <h1>Categories</h1>
      {Object.entries(categories).map(arr => {
        //console.log(arr[1].Number)
        return (
          <div>
            <button>
            
            {arr[1].Category}
            </button>
            
          </div>
        );
      })}
    
            
            </section> 
          );
  
  
    
      
            
        
    
}


export default Categories


