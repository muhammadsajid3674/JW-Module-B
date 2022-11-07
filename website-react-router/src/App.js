import './App.css';
import Footer from './components/Footer/Footer';
import AppRouter from './config/router';
import Home from './pages/Home/Home';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration: 1 }}
    >
      <AppRouter />
      <Footer />
    </motion.div>
  );
}

export default App;
