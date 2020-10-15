import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

/*
const foodILike = [
	{
		id: 1,
		name: "kimchi",
		image: "kimchiImage",
		rating: 5
	},
	{
		id: 2,
		name: "ramen",
		image: "ramenImage",
		rating: 4.9
	},
	{
		id: 3,
		name: "chukumi",
		image: "chukumiImage",
		rating: 3.8
	}
]

function Food({name, picture, rating}){
	return(
		<div>
			<h3>I love {name}</h3>
			<h4>{rating}/5.0</h4>
			<img src={picture} alt="foodImage" />
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
		  <h1>Food Factory</h1>
		  {foodILike.map(dish => (
			  <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
		  ))}
	</div>
  );
}
*/

/*
class App extends React.Component{
	constructor(prop){
		super(prop);
		console.log("constructor!");
	};
	
	state={
		count: 0
	};

	add = () => {
		this.setState(current => ({count: current.count+1}));
	};

	minus = () => {
		this.setState(current => ({count: current.count-1}));
	};
	
	componentDidMount(){
		console.log("componentDidMount!");
	};

	componentDidUpdate(){
		console.log("componentDidUpdate!");
	}
	
	
	render(){
		console.log("render function!");
		return(
			<div>
				<h1>The number is: {this.state.count}</h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		);
	}
}
*/
function App() {
  return (
    <HashRouter>
		  <Navigation />
		  <Route path="/" exact={true} component={Home} />
		  <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
