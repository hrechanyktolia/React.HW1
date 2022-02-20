import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Add = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};
ReactDOM.render(
    <Add />,
    document.getElementById('root')
);
