import './App.css';
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Header from './components/Header'
import { SliderData } from './components/SliderData';




  var topic=[];
  var objects = {}
  var count=[];
  var imgArr=[ 
  ];
  const imgUrls = []
  var files=[];
  const thumbs = [];
  var amount;
  var limit=0;
  var names;
  const categoriesData = [


    {
        Category: 'Fashion',
        Number: 10
    },
    {
        Category: 'Food',
        Number: 8
    },
    {
        Category: 'Film',
        Number: 6
    },
    {
        Category: 'Food',
        Number: 4
    },
    {
        Category: 'Fashion',
        Number: 10
    },
    {
        Category: 'Health',
        Number: 5
    },
    {
        Category: 'Film',
        Number: 18
    },
    {
        Category: 'Food',
        Number: 17
    },
];
  
  

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


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

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
      <section className = "files">
      <div>
      <div>
        <h1>Photos</h1>
          {Fruits.map(data => (
            <div>
            <button>{data.name}</button></div>
          ))}
        </div>
      </div>
      </section> 
    );


}

const header = () => {
  return (
      
          
      <header style={{ textalign: 'center'}}>
          <h1>Slider</h1>
      </header>
  )
}



const Categories = () => {
    
    
  const categories = [
    {Category: 'Fashion', Number:5,},
    {Category: 'Film', Number:6,},
    {Category: 'Food', Number:7,},
    {Category: 'Media', Number:8,},
    {Category: 'Health', Number:9,},
    {Category: 'Fashion', Number:10,},
    {Category: 'Film', Number:11,},
    {Category: 'Food', Number:12,},
    {Category: 'Media', Number:13,},
    {Category: 'Health', Number:14,},
  ]
  
  
  const getImg=5;
  const[results,setResults]=useState([])
  // const[images,getImages]=useState([])
  const fetchImages = ()=>{

    fetch(`https://api.unsplash.com/photos/random?count=20&orientation=portrait&client_id=clP4T66s_UN1CL55zE7agYJQufo9FqjOu0yVRe_sAhA`)
    .then(res=>res.json())
    .then(data=>{
      
      setResults(data.results) 
      
      for (let index = 0; index < count; index++) {
        files.push(data[index].id)
        
        imgArr.push(data[index].urls.regular)
        
      }

      console.log(count)
      // var b= amount
      // console.log(files,imgArr,b)
      count=0;
      files=[];
      imgArr=[];
      console.log(count)
      

      
      
      // console.log(files)
      // console.log(Object.entries(categoriesData).key)  
    })   
  }

  const handler = function(e){
    console.log(e.target.value); //will log the index of the clicked item
};
  
  
        
          return (
            <section className = "categories">
             
            <h1>Categories</h1>
            {Object.entries(categories).map((arr,index) => {
              topic=arr[1].Category;
              count=arr[1].Number;
              //console.log(arr[1].Number)
              return (
                <li key={index}>
                <button onClick = { handler } >
                {arr[1].Category}-
                {arr[1].Number}
                </button>
                
              </li>
              );
            })}
          
                  
                  </section> 
          );
  
  
    
      
            
        
    
}

function App() {
   
  return (
    
    <div style={{textAlign:'center'}}>
      <Header/>
    <div className='container'>
      
      <div className="left">
      <Categories/>
      <br></br>
      <Files/>

      </div>
      <div className="right">
        <div className= "carousel">
      
      <ImageSlider slides={SliderData} />;
      </div>
      <h2>Preview</h2>
      <div className = "previews"><Preview/></div>
      
      </div>
      
      
    </div>
    </div>
  );
}


export default App;
