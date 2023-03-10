import './App.css';
import { useCallback, useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import search from './search.png';

function App() {
  const MY_ID = "9a0d9e63";
  const MY_KEY = "7fe5a425daf9ea2a1cb0fa8fba3e7ec2";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');


  const getRecipe = useCallback(async ()=> {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits)
  }, [wordSubmitted])

  useEffect(() => {
    getRecipe()
  }, [getRecipe])
    

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }


  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
          <div className='container'>
            <button onClick={finalSearch}>
              <img src={search} width="40px" className='icons' alt='search'/>
            </button>
          </div>
        </form>
      
        
      
      </div>

      <div>
        {myRecipes.map((element, index) => (
          <MyRecipesComponent key={index} label={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} ingredients={element.recipe.ingredientLines} cuisineType={element.recipe.cuisineType}/>
        ))}
      </div>
  </div>
  );
}

export default App;
