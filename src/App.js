//faeture-1
import React from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import data from './data.json';

// function App() {
//   return (
//       <div className = "grid-container">
//         <header>
//           <a href= '/'>React Shopping Cart</a>
//         </header>
//         <main>
//         Product lists
//         </main>
//         <footer>
//           All right reserved.
//         </footer>
//       </div>
//   );
// }

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products : data.products,
      size :'',
      sort : ''
    };
  }

    sortProducts= (event) => {
      const sort = event.target.value;
      console.log(event.target.value);
      this.setState((state) => (
        {
          sort: sort,
          products: this.state.products.slice().sort((a,b) => (
            sort === "Lowest" ?
            ((a.price > b.price) ? 1 : -1) :
            sort === "Highest" ?
            ((a.price < b.price) ? 1 : -1) :
            (a._id > b._id ? 1 : -1)
          ))
        }
      )
      )
    };

    filterProducts = (event) =>{
      const { value } = event.target;
     
      value === "" ?
      this.setState(
        {size :  event.target.value,
        products : data.products
        }
        ) :

        this.setState(
          {size :  event.target.value,
          products : data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
          }
        )
    }
  render(){
    return(
      <div className = "grid-container">
      <header>
         <a href= '/'>React Shopping Cart</a>
      </header>
      <main>
         <div className = "content">
            <div className = "main">
              <Filter
              count = {this.state.products.length}
              sort = {this.state.sort}
              size = {this.state.size}
              sortProducts = {this.sortProducts}
              filterProducts = {this.filterProducts}
               />
              <Products products = {this.state.products}/>
            </div>
            <div className = "sidebar">
              cart
            </div>
         </div>
      </main>
      <footer>
         All right reserved.
      </footer>
      </div>
    )
  }
}

export default App;
