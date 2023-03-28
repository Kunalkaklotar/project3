import './App.css';
import Kunal from './Kunal';

function App() {
  return (
    <div className="profile">
      <div className="w-50">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>
      </div>
      <div className="w-50">
        {/* <h1>Kunal Kaklotar</h1> */}

      </div>
      <Kunal name="Kunal Kaklotar" skills={["html","html5","css","css3","media query","jquery","bootstrap","java script","reactjs"]} />
    </div>
  );
}

export default App;
