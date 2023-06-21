// Write your Color component here
const Color = (props) => {
  return <div className="red"></div>
}

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>

      <div id="colors-list">
        <Color />
        <Color />
        <Color />
      </div>
    </div>  //last div of container
  );
};

export default App;
