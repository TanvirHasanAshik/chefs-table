import CurrentCooksTable from "../CurrentCooksTable/CurrentCooksTable";
import WantCooksTable from "../WantCooksTable/WantCooksTable";

const CookingTable = ({ wantCooks, handlePreparingCook, preparingCooks }) => {

    return (
        <div className="w-full lg:w-1/3 mt-8">
            <WantCooksTable handlePreparingCook={handlePreparingCook} wantCooks={wantCooks}></WantCooksTable>
            <CurrentCooksTable preparingCooks={preparingCooks}></CurrentCooksTable>
        </div >
    );
};

export default CookingTable;