import './App.css';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {
   
  return (
    
    <div className='container'>
      <Header/>
      <ImageSlider slides={SliderData} />;
    </div>
  );
}

export default App;
