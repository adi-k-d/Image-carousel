import React from 'react'

const Files = () => {
    const Fruits = [
        { name: 'Apple' },
        { name: 'Apricot' },
        { name: 'Honeyberry' },
        { name: 'Papaya' },
        { name: 'Jambul' },
        { name: 'Plum' },
        { name: 'Lemon' },
        { name: 'Pomelo' }
      ];
    
      return (
        <section className = "categories">
        <div>
        <h1>Photos</h1>
          {Fruits.map(data => (
            <p><button>{data.name}</button></p>
          ))}
        </div>
        </section> 
      );


}

export default Files
