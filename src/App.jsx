import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { Navigate, Route, Routes } from "react-router-dom";

import WebHome from "./WebHome";
import WebServices from "./WebServices";
import WebAbout from "./WebAbout";
import WebContact from "./WebContact";
import WebNav from "./WebNav";
import WebFooter from "./WebFooter";


function App() {

    return (
        <>
            <WebNav />
            <Routes>
                <Route path="/" element={<WebHome />} />
                <Route path="/service" element={<WebServices />} />
                <Route path="/about" element={<WebAbout />} />
                <Route path="/contact" element={<WebContact />} />
                <Route path="/*" element={<Navigate to='/' />} />
            </Routes>
            <WebFooter />
        </>
    )
}

export default App;