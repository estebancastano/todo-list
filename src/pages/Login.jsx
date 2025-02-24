import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100 dark:bg-gray-900 p-6">
            <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Iniciar Sesión</h2>

                <form className="mt-6 space-y-4">
                    <div>
                        <label className="block text-gray-600 dark:text-gray-300">Correo Electrónico</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu correo"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 dark:text-gray-300">Contraseña</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Ingresar
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                    ¿No tienes una cuenta? <Link to="/register" className="text-blue-500 hover:underline">Regístrate</Link>
                </p>
            </motion.div>
        </div>
    );
}
