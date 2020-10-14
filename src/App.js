import React from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

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
class App extends React.Component{
	state = {
		isLoading: true,
		movies: []
	};

	getMovies = async() =>{
		const {
			data:{
				data:{movies}
			}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
		this.setState({movies, isLoading: false});
		console.log(movies);
	};
	
	componentDidMount(){
		this.getMovies();
	};

	render(){
		const {isLoading, movies} = this.state;
		
		return(
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader_text">"Now Loading..."</span>
					</div>
				) : (
					<div className="movies">
						{movies.map(movie => (
							<Movie 
								key={movie.id} 
								id={movie.id} 
								year={movie.year} 
								title={movie.title}
								summary={movie.summary}
								poster={movie.medium_cover_image} 
								genres={movie.genres}
							/>))
						}
					</div>
				)}
			</section>	
		);
	}
}

export default App;
