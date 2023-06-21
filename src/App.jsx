import { useState } from 'react';


//Color Component
const Color = ({color, setSelectedColor, selectedColor}) => {

  const border = selectedColor === color ? `${color} selected` : color; 

  return  (
  
  <div className={border}
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
        <Color color="violet" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="pink" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
      </div>
    </div>  //last div of container
  )
};

export default App;








