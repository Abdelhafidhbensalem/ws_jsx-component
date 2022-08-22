//import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { products } from "./data"
import Child1 from "./Components/Child1/Child1"
import Child2 from './Components/Child2/Child2';

function App() {
  //console.log(products)
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap", gap: "10px" }}>
      {products.map((el) => <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={el.thumbnail} alt="nike-air-shoe" />
          </div>

          <div className="contentBx">

            <h2>{el.title}</h2>

            <div className="size">
              <h3>images details :</h3>
              {el.images.map(el => <img style={{ width: "30px", height: "30px" }} src={el} alt="" />)}
            </div>

            <div className="color">

              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default App;
