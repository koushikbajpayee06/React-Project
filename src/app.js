import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";



const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Koushik</strong>
      </p>
    </footer>
  );
};
  const AppLayout = () =>{
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer/>
    </div>
  )
  };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);








