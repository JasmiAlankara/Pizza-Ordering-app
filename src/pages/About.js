import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Pizza Paradise, 
        </p>
        <p>
        where we bring you the 
        finest and freshest pizzas right to your doorstep! At 
        Pizza Paradise, we are passionate about delivering delicious 
        pizzas made with high-quality ingredients and a secret blend 
        of spices that will make every bite a perfect experience. 
        Whether you're craving a classic Margherita, a hearty meat feast, 
        or a fresh vegetarian option, we have something to satisfy every taste. 
        Our mission is to provide fast, friendly service and the best pizza in town, 
        all from the comfort of your home. Order now and enjoy the best pizza in town, 
        hot and fresh!
        
        </p>
      </div>
    </div>
  );
}

export default About;