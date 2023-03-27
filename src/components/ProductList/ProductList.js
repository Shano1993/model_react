import './ProductList.css';
import imageOne from "../../assets/images/image1.png";
import imageTwo from "../../assets/images/image2.png";
import imageThree from "../../assets/images/image3.png";
import imageFour from "../../assets/images/image4.png";
import imageFive from "../../assets/images/image5.png";
import {Product} from "../Product/Product";

export const ProductList = function () {
    const products = [
        {product: new Product(1, "Produit 1", "Lorem ipsum dolor sit amet", 12, 230, imageOne)},
        {product: new Product(2, "Produit 2", "Lorem ipsum dolor sit amet", 5, 230, imageTwo)},
        {product: new Product(3, "Produit 3", "Lorem ipsum dolor sit amet", 8, 230, imageThree)},
        {product: new Product(4, "Produit 4", "Lorem ipsum dolor sit amet", 23, 230, imageFour)},
        {product: new Product(5, "Produit 5", "Lorem ipsum dolor sit amet", 42, 230, imageFive)}
    ]

    return (
        <div className="ProductList">
            {products.map(product =>
                <div className="Product">
                    <div className="ProductCover">
                        <img src={product.product.cover} alt=""/>
                    </div>
                    <div className="ProductDescription">
                        <h1>{product.product.name}</h1>
                        <p>Description: {product.product.description}</p>
                        <div className="Price">
                            <div className="Select">
                                <div className="Del">-</div>
                                <span>10</span>
                                <div className="Add">+</div>
                            </div>
                            <span>{product.product.price} $</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}