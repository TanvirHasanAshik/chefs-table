
const CookingTable = ({ wantCooks }) => {
    return (
        <div className="w-full lg:w-1/3 mt-8">
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
                        {/* row 1 */}
                        <tr className="bg-gray-100">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className="btn btn-secondary mt-4 rounded-3xl">process</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CookingTable;