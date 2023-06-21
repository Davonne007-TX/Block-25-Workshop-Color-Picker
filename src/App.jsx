//Color Component
const Color = ({color}) => {
  return <div className={color}></div>
}

//App Component 
const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>

      <div id="colors-list">
        <Color color="green"/>
        <Color color="black"/>
        <Color color="blue"/>
      </div>
    </div>  //last div of container
  );
};

export default App;
