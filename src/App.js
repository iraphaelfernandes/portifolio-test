import ImageSlider from './components/ImageSlider'
import {SliderData} from './components/SliderData'
import './index.css';

function App() {
  return (
    <div className="App">
        <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
