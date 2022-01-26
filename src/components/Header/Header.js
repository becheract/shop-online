
function Header(props) {
    return (
        <header>
            <div>
                <strong>Shop</strong> Online
            </div>
            <div>
                Cart: {props.cartCount}
            </div>
            <div>
                User: {props.userName}
            </div>
            <hr />
        </header>
    );
}

export default Header;