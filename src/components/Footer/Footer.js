
function Footer(props) {
    const now = new Date();
    const year = now.getFullYear();

    const handleAnotherClick = () => {
        console.log('Clicked too in ' + year);
    }

    return (
        <footer>
            <hr />
            Copyright &copy; {year}.
            You have {props.cartCount} products in the cart.
            <button onClick={handleAnotherClick}>Click me too</button>
        </footer>
    );
}

export default Footer;