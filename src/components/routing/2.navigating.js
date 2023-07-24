// navigating: user does something => app changes window location
//

// Products.js
import { useNavigate, Link } from 'react-router-dom';

const PRODUCT = { slug: 'some-slug', name: 'my awesome product' }

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

            {/* dynamic routing*/}
            <Link to={`/products/${PRODUCT.slug}`}>
                <div className="btn">View Details</div>
            </Link>
        </div>
    );
};

export default Products;
