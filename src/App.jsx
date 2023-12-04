import { AnimatePresence } from 'framer-motion';
import './App.css'
import Form from './pages/Form/Form';
import Home from './pages/Home/Home'
import { Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <>
    <AnimatePresence mode="wait">

       <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path={"/form"} element={<Form />} />
          </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
