import {useState} from 'react';
import './App.css';
import { images } from './images';


function App() {
  const [imgIndex, setImgIndex] = useState(0);

  function handleNext(){
    setImgIndex(imgIndex + 1);
  }

  function handlePrevious(){
    setImgIndex(imgIndex - 1);
  }

  return (
    <div className="App">
      {images.map((image, index) =>
        imgIndex === index && (
          <img src={image} alt="not found" className='App-images'/>
        )
      )}
      <button className="right-arrow" onClick={handleNext}>Next Slide</button>
      <button className="left-arrow" onClick={handlePrevious}>Previous Slide</button>
    </div>
  );
}

export default App;