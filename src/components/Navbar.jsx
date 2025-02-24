import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">TaskMaster</h1>
            <div>
                <Link to="/login" className="mr-4 hover:text-gray-200 px-4 py-2 rounded-md bg-blue-600">Login</Link>
                <Link to="/register" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
                    Registrarse
                </Link>
            </div>
        </nav>
    );
}
