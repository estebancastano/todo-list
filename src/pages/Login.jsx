import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

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

                <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition mt-4 cursor-pointer">
                    <FcGoogle size={24} /> Iniciar sesión con Google
                </button>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white dark:bg-gray-800 px-2 text-gray-600 dark:text-gray-300">O</span>
                    </div>
                </div>

                <form className="mt-4 space-y-4">
                    <div>
                        <label className="block text-gray-600 dark:text-gray-300">Usuario</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu usuario"
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
