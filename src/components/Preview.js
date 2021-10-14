import React from 'react'
import { SliderData } from './SliderData';

const Preview = () => {
    
    
      return (
        <div className='Previews' >
        
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
      </div>
        
       
        );
        
        
      

}

export default Preview
