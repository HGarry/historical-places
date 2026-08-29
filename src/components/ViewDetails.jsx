import { Link, useParams } from "react-router";
import Button from "./Button";
import Card from "./Card";
// import data from "/data.json";
import { useSelector } from "react-redux";

function ViewDetails() {
    const {id} = useParams();   // typeof id - string
    const markunmark = useSelector((state) => state.markunmark);
    // const matchplace = data.filter(item => item.id === Number(id)); // array
    const matchplace = markunmark.find(item => item.id === Number(id));   // object
    
  return (
    <div className="bg-gray-900 w-full h-screen p-8">
      <h2 className="text-3xl font-bold text-white mb-12">Historical Places</h2>
      <Link to={"/"}>
        <Button>
          Go Back
        </Button>
      </Link>
      <div className={`lg:w-4/12 md:w-6/12 mx-auto mb-12`}>
        <Card item={matchplace} />
      </div>
    </div>
  );
}

export default ViewDetails;
