import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingTable from "../CookingTable/CookingTable";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('fake_data.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    return (
        <div className="text-center my-20">
            <h1 className="text-3xl text-gray-600 font-bold my-5 ">Our Recipes</h1>
            <p className="text-gray-500 text-sm">A delicious recipe combines fresh, flavorful ingredients with simple cooking techniques to create a mouthwatering dish. It balances taste, aroma, and texture, offering a delightful experience for the palate. Whether it's a hearty meal, a savory snack, or a sweet treat, a great recipe is easy to follow and leaves everyone craving more!</p>

            <div className="flex flex-col lg:flex-row gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-4 w-full lg:w-2/3">
                    {
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} />)
                    }
                </div>
                <CookingTable></CookingTable>
            </div>
        </div>
    );
};

export default Recipes;