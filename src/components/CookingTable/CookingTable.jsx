
const CookingTable = () => {
    return (
        <div className="w-full lg:w-1/3 mt-8">
            <h1 className="text-2xl font-bold">Want to cook: <span>01</span></h1>
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
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <button className="btn">process</button>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CookingTable;