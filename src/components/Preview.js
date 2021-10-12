import React from 'react'
import { SliderData } from './SliderData';

const Preview = () => {
    
    
      return (
        <section className='Previews'>
        
        {SliderData.map((slide, index) => {
          return (
            <div
              className="preview"
              key={index}
            >
              <img src={slide.image} alt='travel image' className='previewimage' />
            </div>
          );
        })}
      </section>
        
       
        );
        
        
      

}

export default Preview
