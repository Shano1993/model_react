import './Product.css';

export class Product {
    constructor(id, name, description, quantity, price, cover) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.cover = cover;
    }
}