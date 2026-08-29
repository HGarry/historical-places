import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
// import data from "/data.json";
import { useDispatch, useSelector } from "react-redux";
import { hideShow } from "../redux/hideShowSlide";

function RandomPlace() {
  const [index, setIndex] = useState(0);
  const hide = useSelector((state) => state.hide);
  const markunmark = useSelector((state) => state.markunmark);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-12">Historical Places</h2>
      <div
        className={`inline-block mb-8 }`}
        onClick={() => {
          setIndex(Math.floor(Math.random() * markunmark.length));
          if (hide) {
            dispatch(hideShow());
          }
        }}
      >
        <Button>Suggest Random Place</Button>
      </div>
      <div
        className={`lg:w-4/12 md:w-6/12 mx-auto mb-12 ${!hide ? "visible" : "hidden"}`}
      >
        <Card item={markunmark[index]} className={``} />
      </div>
    </div>
  );
}

export default RandomPlace;
