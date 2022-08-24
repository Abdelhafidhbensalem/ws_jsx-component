//import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { products } from "./data"
import Child1 from "./Components/Child1/Child1"
import Child2 from './Components/Child2/Child2';
import ProductList from './Components/ProductList/ProductList';

function App() {
  //console.log(products)
  const hello=(x) =>{
    alert(x)
  }
  return (
    <div className="App" >
      <ProductList products={products} hello={hello}/>
      {/*products.map((el) => <div className="container">
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
          </div>
        </div>
      </div>
  )*/}
    </div>
  )
}

export default App;
