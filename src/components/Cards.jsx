import { useSelector } from "react-redux";
import Card from "./Card";
// import data from "/data.json";

function Cards() {
    const markunmark = useSelector((state) => state.markunmark);
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-12">
        All Historical Places
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
        {markunmark.map((item, id) => {
          return <Card key={id} item={item} />;
        })}
      </div>
    </>
  );
}

export default Cards;
