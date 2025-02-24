import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />

            <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <motion.h1
                    className="text-4xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Organiza tu Día con <span className="text-blue-500">TaskMaster</span>
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Una forma rápida y eficiente de gestionar tus tareas diarias.
                </motion.p>

                <motion.div
                    className="mt-6 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <FaTasks size={70} className="text-blue-500" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-6"
                >
                    <Link
                        to="/register"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition hover:shadow-lg hover:text-gray-800"
                    >
                        Empezar Ahora
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
