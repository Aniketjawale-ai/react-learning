import "./Product.css";


function Product({title , price , features}){

   
    return (
        <div className="Product">
                <h3>{Title}</h3>
                <h5>Price: {price}</h5>
                {price> 30000 && <p> Desount of 5% </p>}
        </div>
    );
}

export default Product;