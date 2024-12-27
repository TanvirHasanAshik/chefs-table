import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingTable from "../CookingTable/CookingTable";
import { ToastContainer, toast } from 'react-toastify';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantCooks, setWantCooks] = useState([]);

    useEffect(() => {
        fetch('fake_data.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    const handleCook = (recipe) => {
        const findCook = wantCooks.find(cook => cook.recipe_id === recipe.recipe_id);
        if (!findCook) {
            const newCooks = [...wantCooks, recipe];
            setWantCooks(newCooks);
        } else {
            alert('Already added to cooking list');
        }
    };

    return (
        <div className="text-center my-20">
            <div>
                <h1 className="text-3xl text-gray-600 font-bold my-5 ">Our Recipes</h1>
                <p className="text-gray-500 text-sm">A delicious recipe combines fresh, flavorful ingredients with simple cooking techniques to create a mouthwatering dish. It balances taste, aroma, and texture, offering a delightful experience for the palate. Whether it's a hearty meal, a savory snack, or a sweet treat, a great recipe is easy to follow and leaves everyone craving more!</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-4 w-full lg:w-2/3">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                            handleCook={handleCook}
                        />)
                    }
                </div>
                <CookingTable wantCooks={wantCooks}></CookingTable>
            </div>
        </div>
    );
};

export default Recipes;