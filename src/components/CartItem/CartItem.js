import './CartItem.css';
import trash from '../../assets/images/trash.svg';

export const CartItem = function () {
    return (
        <div className="CartItem">
            <img src={trash} alt="" width="20rem"/>
            <div className="ProductTrash">
                <p>Produit 1</p>
                <span>(2)</span>
            </div>
        </div>
    )
}