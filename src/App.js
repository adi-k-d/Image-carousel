import './App.css';
import Categories from './components/Categories';
import Files from './components/Files';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider';
import Preview from './components/Preview';
import { SliderData } from './components/SliderData';

function App() {
   
  return (
    
    <div className='container'>
      <Header/>
      <ImageSlider slides={SliderData} />;
      <Categories/>
      <Files/>
      <Preview/>
    </div>
  );
}

export default App;
