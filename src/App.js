//import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { products } from "./data"
import Child1 from "./Components/Child1/Child1"
import Child2 from './Components/Child2/Child2';
import ProductList from './Components/ProductList/ProductList';
import Tables from './Components/Table/Tables';
import { useState } from 'react';
import Layout from './Components/Layout';
import PrivateRoute from './Components/PrivateRoute';




function App() {
  const [newProducts, setNewProducts] = useState(products)
  //console.log(products)
  const hello=(x) =>{
    alert(x)
  }
  const delProduct=(x) =>{
    setNewProducts(newProducts.filter(el => el.id != x))

  }
  return (
    <div className="App" >
      <h1>{null}</h1>
      
      <ProductList products={products} hello={hello} />
      <Layout><Tables table={newProducts} delProduct={delProduct} /></Layout>
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
