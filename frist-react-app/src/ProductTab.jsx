import Product  from "./Product.jsx";

function ProductTab(){
    let options = ["hi-tech", "durable", "fast"];
    // let options2 = { a: "hi-teach", b: "durable", c:"fast"};
    return (
        <>
    <Product title = "phone" price ={40000} features ={{a: "hi-tech"}} />
       </>
    );
}

export default ProductTab;