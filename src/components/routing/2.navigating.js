// navigating: user does something => app changes window location
//

// Products.js
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="title">
                <h1>Order Products</h1>
            </div>
            <button className="btn" onClick={() => navigate('order-summary')}>
                Place Order
            </button>
            <button className="btn" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};

export default Products;
