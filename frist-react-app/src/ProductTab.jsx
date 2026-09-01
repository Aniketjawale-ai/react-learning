import Product  from "./Product.jsx";

function ProductTab(){
    let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li> ];
    
    return (
        <>
    <Product title = "phone" price ={40000} features ={options} />
       </>
    );
}

export default ProductTab;