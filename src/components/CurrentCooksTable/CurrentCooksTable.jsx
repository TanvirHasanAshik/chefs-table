import React, { useEffect, useState } from 'react';

const CurrentCooksTable = ({ preparingCooks }) => {
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        const time = preparingCooks.reduce((acc, cook) => acc + parseInt(cook.preparing_time), 0);
        const calories = preparingCooks.reduce((acc, cook) => acc + parseInt(cook.calories), 0);
        setTotalTime(time);
        setTotalCalories(calories);

    }, [preparingCooks]);
    return (
        <div className="mt-8">
            <h1 className="text-2xl font-bold">Currently cooking: <span>{preparingCooks.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preparingCooks.length === 0 ?
                                <tr className="text-center font-bold">
                                    <td colSpan="5">No data found</td>
                                </tr>
                                : preparingCooks.map((cook, indx) => (
                                    <tr key={cook.recipe_id}
                                        className={`${indx % 2 == 0 ? "bg-orange-200"
                                            : "bg-white"} text-sm`}
                                    >
                                        <th>{indx + 1}</th>
                                        <td>{cook.recipe_name}</td>
                                        <td>{cook.preparing_time} minutes</td>
                                        <td>{cook.calories} calories</td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
                {preparingCooks.length !== 0 && <div className="mt-4 flex justify-end gap-4 font-bold">
                    <h2>Total time: <span>{totalTime}</span></h2>
                    <h2>Total calories: <span>{totalCalories}</span></h2>
                </div>}
            </div>
        </div>
    );
};

export default CurrentCooksTable;