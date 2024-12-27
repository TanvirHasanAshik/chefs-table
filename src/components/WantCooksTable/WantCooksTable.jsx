import React from 'react';

const WantCooksTable = ({ wantCooks, handlePreparingCook }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Want to cook: <span>{wantCooks.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wantCooks.length === 0 ? <tr className="text-center font-bold"><td colSpan="5">No data found</td></tr>
                            :
                            wantCooks.map((cook, indx) => (
                                <tr key={cook.recipe_id}
                                    className={`${indx % 2 == 0 ? "bg-gray-200"
                                        : "bg-white"} text-sm`}
                                >
                                    <th>{indx + 1}</th>
                                    <td>{cook.recipe_name}</td>
                                    <td>{cook.preparing_time} minutes</td>
                                    <td>{cook.calories} calories</td>
                                    <td>
                                        <button
                                            onClick={() => handlePreparingCook(cook)}
                                            className="btn btn-outline btn-secondary mt-4 rounded-3xl">
                                            preparing
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WantCooksTable;