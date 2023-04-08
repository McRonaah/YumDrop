import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { About, CreateContainer, Header, MainContainer, Services, Footer } from './components';
import MenuComponent from './components/MenuComponent';
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
   <AnimatePresence wait>
     <div className="w-screen h-auto flex  flex-col" >
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menu" element={<MenuComponent />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
    </div>
    <Footer />
   </AnimatePresence>
  );
}

export default App;