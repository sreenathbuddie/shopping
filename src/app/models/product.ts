export class Product {
    id: string;
    colour: string;
    brand: string;
    discount: number;
    rating : number;
    image: string;
    price: {
        final_price: number;
    };
    title: string;

    constructor(id ,colour, brand, discount, rating, image, price, title){
        this.id = id;
        this.colour = colour;
        this.brand = brand;
        this.discount = discount;
        this.rating = rating;
        this.image = image;
        this.price= price;
        this.title= title;
    }
}
