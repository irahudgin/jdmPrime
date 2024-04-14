import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
