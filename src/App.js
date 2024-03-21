import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tickets from "./pages/Tickets";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import { Provider } from "react-redux";
import { store } from "./Store/store";
import "./i18n";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Blog" element={<Blog />} />.
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
