import './App.css';
import {Header} from "../Header/Header";
import {ProductList} from "../ProductList/ProductList";
import {Categories} from "../Categories/Categories";
import {Cart} from "../Cart/Cart";

function App() {
  return (
      <>
          <div className="App">
              <Header/>
              <div className="Project">
                  <div className="ProjectRight">
                      <Cart />
                  </div>
                  <div className="ProjectLeft">
                      <Categories />
                      <ProductList />
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
