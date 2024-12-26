import { FaHandHolding } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
const Recipe = ({ recipe }) => {
    console.log(recipe);
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className=" card bg-base-100 border border-base-200 rounded-xl">
            <figure className="px-10 mt-10 h-60">
                <img
                    src={recipe_image}
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-gray-600">{recipe_name}</h2>
                <p className="text-gray-600 text-left text-sm">{short_description}</p>
                <hr />
                <h2 className="text-left text-gray-600">Ingredients:</h2>
                <ul className="pl-4 text-gray-500">
                    {
                        ingredients.map(ingredient => <li className="text-left px-2 flex text-sm gap-2" key={ingredient}><FaHandHolding />{ingredient}</li>)
                    }
                </ul>
                <div className="flex justify-between text-gray-600 font-bold mt-2">
                    <p className="flex items-center gap-2"><IoMdTime />{preparing_time} minutes</p>
                    <p className="flex items-center gap-2"><FaFire />{calories} calories</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-warning rounded-badge mt-2">Want to cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;