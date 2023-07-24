import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// where: path
// what: element

const HomePage = () => { }
const ProductsPage = () => { }
const AboutPAge = () => { }
const NoMatch = () => {
    return (<div>404!</div>)
}

// pages
const MyApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPAge />} />
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>
        </>
    );
};

export default MyApp;



// components
export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
};
