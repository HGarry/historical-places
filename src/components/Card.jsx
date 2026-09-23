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
    <div className="p-6 bg-yellow-50 rounded-2xl text-center">
      <img
        src={image}
        alt={name}
        className="aspect-4/2 object-cover w-full rounded-xl"
      />
      <h2 className="font-bold mt-3 text-xl">{name}</h2>
      {id && <p className="text-gray-600 mt-2 mb-3">{description}</p>}{" "}
      <h5 className="text-sm text-red-400 mt-2 mb-3 font-bold">
        {visited ? "Visited" : "Not Visited"}
      </h5>
      <div
        className={
          !id
            ? "flex justify-between items-center gap-2 mt-2"
            : "flex justify-center mt-2"
        }
      >
        <Button
          onClick={handleMarkUnMark}
          className="flex-1 text-xs sm:text-sm px-2 py-2 whitespace-nowrap"
        >
          <i className="fa-solid fa-location-pin mr-1"></i>
          {visited ? "Unmark as Visited" : "Mark as Visited"}
        </Button>

        <Activity mode={!id ? "visible" : "hidden"}>
          <Link to={`/place/${item.id}`} className="flex-1">
            <Button className="bg-amber-300 w-full text-xs sm:text-sm px-2 py-2 whitespace-nowrap">
              Details
              <i className="fa-solid fa-arrow-right ml-1"></i>
            </Button>
          </Link>
        </Activity>
      </div>
    </div>
  );
}

export default Card;
