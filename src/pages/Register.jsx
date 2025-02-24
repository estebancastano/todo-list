import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

        <form className="mt-6 space-y-4">
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
