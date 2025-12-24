import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./layout/Body";
import Home from "./Pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./components/Login";
import appStore from "./store/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
