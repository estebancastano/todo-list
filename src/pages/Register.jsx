import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100 dark:bg-gray-900">
      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Regístrate</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Crea una cuenta para empezar</p>

        <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition mt-2 cursor-pointer">
          <FcGoogle size={24} /> Registrarse con Google
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
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Correo Electrónico" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Contraseña" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg transition hover:cursor-pointer">Registrarse</button>
        </form>

        <p className="text-gray-600 dark:text-gray-300 mt-4">¿Ya tienes cuenta? <Link to="/login" className="text-blue-500 hover:underline">Inicia sesión</Link></p>
      </motion.div>
    </div>
  );
}
