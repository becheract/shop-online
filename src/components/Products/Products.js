import React from "react";
import Product from './Product/Product'
import uuid from 'react-uuid';

class Products extends React.Component {
    constructor() {
        super();

        //array of products
        this.state = {
            products : []
        };
    }

        //when component is mounted to app screen it will run this react hook to fill the products array from above with products. Only affecting the products component
        componentDidMount() {
            const products = [ 
                {
                    id : uuid(),
                    name : 'React Book',
                    price : 20
                },
                {
                    id : uuid(),
                    name : 'React Book',
                    price : 21
                }
            ];
            //setting the state of the this.state from above and the const products array. 
            //Usually you do this.setState({ products : products })
            //But since its the same name React is smart enough to set it like the one from above
            this.setState({ 
                products
            });
        }

    //this will be rendered first
    render() {
        return (
        //I need to display all the objects in the array 
        //and then I will use a functional component to display said array of objects
        <div>
        <h1>Our Products</h1>
        <div>{this.state.products.map(
            (product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                    />
                  );
              }
              )}</div>
            </div>
          );
      }
}

export default Products;