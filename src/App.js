import React from 'react';

function Food({name, image}){
	return(
		<div>
			<h3>I love {name}</h3>
			<img src={image} alt="foodImage" />
		</div>
	);
}

const foodILike = [
	{
		name: "kimchi",
		image: "kimchiImage"
	},
	{
		name: "ramen",
		image: "ramenImage"
	},
	{
		name: "chukumi",
		image: "chukumiImage"
	}
]

function App() {
  return (
    <div>
		  <h1>Food Factory</h1>
		  {foodILike.map(dish => (
			  <Food key={dish.name} name={dish.name} image={dish.image} />
		  ))}
	</div>
  );
}

export default App;
