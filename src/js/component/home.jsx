import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClock} from "@fortawesome/free-solid-svg-icons"
import PropType from "prop-types";
import reload from "../index.js"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = (props) => {
	return (
		<div className="container-fluid text-center">	
			<div className="mainDiv">
				<div className="smallBack">
				<FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
				</div>
				<div className="smallBack">
					{props.digitFour}
				</div>
				<div className="smallBack">
					{props.digitThree}
				</div>
				<div className="smallBack">
					{props.digitTwo}
				</div>
				<div className="smallBack">
					{props.digitOne}
				</div>
			</div>
			<div>
				<button onClick = { reload } className="refresh">Click to reload!</button>
			</div>
			
		</div>		
	);
};


Home.propTypes = {
	digitOne: PropType.number,
	digitTwo: PropType.number,
	digitThree: PropType.number,
	digitFour: PropType.number
};





export default Home;

