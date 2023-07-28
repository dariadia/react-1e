// navigating: user does something => app changes window location
//

// Products.js
import { useNavigate, Link } from 'react-router-dom';

const PRODUCT = { slug: 'some-slug', name: 'my awesome product' }
const products = [
    {name: 'myPdf', url: 'some-url.pdf'},
    {name: 'myPdf2', url: 'some-url-2.pdf'}
]

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
            <a href="some-link.html" target="_blank">
                <img src="some-link"/>hello world
            </a>
        </div>
    );
};

export default Products;
