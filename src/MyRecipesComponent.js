import checkmark from './checkmark.png';
function MyRecipesComponent({label, image, calories, ingredients, cuisineType}) {
    return( <div className='recipe-container'>
        <h2>{label}</h2>
        <img src={image} width="300px" alt="food"/>
        <h3 className='white'>{calories.toFixed()} calories</h3>
        <p className='white'>Cuisine: {cuisineType}</p>
        <ul className='list'>
            {ingredients.map(ingredient => (
                <li><img src={checkmark} className="icon"/>{ingredient}</li>
            ))}
        </ul>
    </div>)
}

export default MyRecipesComponent;