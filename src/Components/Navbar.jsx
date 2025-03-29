import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray text-white py-4 mx-41 my-4 rounded-full border border-lightGray">
            <div className="container mx-auto flex justify-center">
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/careers" className="hover:underline">Careers</Link>
                    <Link to="/security" className="hover:underline">Security</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;