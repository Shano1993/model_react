import './Cart.css';
import {CartItem} from "../CartItem/CartItem";

export const Cart = function () {
    return (
        <div className="Cart">
            <h1>Vos articles</h1>
            <CartItem />
            <CartItem />
            <CartItem />
            <div className="TrashDelete">
                <button className="Trash">Vider le panier</button>
            </div>
        </div>
    )
}
