import React from "react";
import NavBar from "./navbar.jsx";
import JumboTron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
const Home = () => {
	return (
		<>
		<NavBar />
		<JumboTron />
		<div className="d-flex m-5 align-content-center">
		<Card />
		<Card />
		<Card />
		<Card /></div>
		<Footer />
		</>

	)

}

export default Home;
