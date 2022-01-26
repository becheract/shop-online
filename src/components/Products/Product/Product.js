
function Product(props) {
    console.log(props);
    return (
        <div>
            <hr />
            <h2>{props.product.name}</h2>
            <div>Price: ${props.product.price}</div>
            <div>Id: {props.product.id}</div>
        </div>
    );
}

export default Product;