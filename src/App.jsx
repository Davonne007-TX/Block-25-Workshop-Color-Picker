import { useState } from 'react';


//Color Component
const Color = ({color, setSelectedColor}) => {
  return  (
  
  <div className={color}
  onClick={() => setSelectedColor(color)}>
  </div>

  )
};  //last curly of color component 



//App Component 
const App = () => {
const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
      </div>
    </div>  //last div of container
  )
};

export default App;






