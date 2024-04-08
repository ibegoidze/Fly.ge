import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import Header from "./Components/Global/Header/Header";
import Footer from "./Components/Global/Footer/Footer";

import { Provider } from "react-redux";
import { store } from "./Store/store";
import "./i18n";
import Tickets from "./pages/Tickets";
import Flights from "./pages/Flights";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index path="/" element={<Tickets />} />
            <Route path="/Flights" element={<Flights />} />
          </Route>
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
