import { Link, useParams } from "react-router";
import Button from "./Button";
import { Activity } from "react";
import { useDispatch } from "react-redux";
import { markVisited } from "../redux/MarkUnmarkSlice";

function Card({ item }) {
  const { name, description, image, visited } = item;
  const { id } = useParams();

  const dispatch = useDispatch();
  const handleMarkUnMark = () => {
    dispatch(markVisited(item.id));
  };

  return (
    <div className="p-6 bg-yellow-50 rounded-2xl text-center flex flex-col justify-between h-full">
      <div>
        <img src={image} alt={name} className="aspect-4/2 object-cover w-full rounded-xl" />
        <h2 className="font-bold mt-3 text-xl">{name}</h2>
        
        {/* Description shows ONLY on details page */}
        {id && <p className="text-gray-700 text-sm mt-1">{description}</p>}

        <h5 className="text-sm text-red-400 mt-2 font-bold">
          {visited ? 'Visited' : 'Not Visited'}
        </h5>
      </div>

      {/* Buttons remain side-by-side on one line without text wrapping */}
      <div className={!id ? "flex justify-between items-center gap-1.5 mt-4" : "flex justify-center mt-4"}>
        <Button 
          onClick={handleMarkUnMark}
          className="text-xs sm:text-sm px-2.5 sm:px-3 py-2 whitespace-nowrap"
        >
          <i className="fa-solid fa-location-pin mr-1"></i>
          {visited ? 'Unmark Visited' : 'Mark as Visited'}
        </Button>

        <Activity mode={!id ? "visible" : "hidden"}>
          <Link to={`/place/${item.id}`}>
            <Button className="text-xs sm:text-sm px-2.5 sm:px-3 py-2 whitespace-nowrap">
              View Details
              <i className="fa-solid fa-arrow-right ml-1"></i>
            </Button>
          </Link>
        </Activity>
      </div>
    </div>
  );
}

export default Card;