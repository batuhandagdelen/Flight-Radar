import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./pages/map";
import List from "./pages/list";
import Header from "./components/header";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/modal";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>

      <Modal />
    </BrowserRouter>
  );
};

export default App;
