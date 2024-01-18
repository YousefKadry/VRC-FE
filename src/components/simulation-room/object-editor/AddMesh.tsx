import { useState } from "react";
import ObjectController from "./ObjectController";
import classes from "./AddMesh.module.css";

const AddMesh = () => {
  const [objects] = useState([
    { x: 7.83, y: 883, z: 0.94 },
    { x: 0, y: 0.6, z: 0.8 },
    { x: 0, y: 0.6, z: 0.8 },
  ]);

  // Todo
  const scaleUp = (index: number) => {
    console.log(index, " scale up");
  };

  //Todo
  const scaleDown = (index: number) => {
    console.log(index, " scale down");
  };

  //Todo
  const select = (index: number) => {
    console.log(index, " select");
  };

  //Todo
  const deleteObj = (index: number) => {
    console.log(index, " delete");
  };

  return (
    <div
      className={`w-full max-w-[400px] overflow-auto ${classes["scrollbar-hide"]}`}
    >
      <div className="mb-7 rounded-lg w-[440px] sm:w-full h-[41px] flex items-center justify-center bg-gradient-to-r from-[#9167C2] to-[#533b78]">
        <h3 className="font-bold"> Add Mesh </h3>
      </div>
      <div className="flex flex-col">
        {objects.map((object, index) => (
          <ObjectController
            key={index}
            object={object}
            onScaleUp={() => scaleUp(index)}
            onScaleDown={() => scaleDown(index)}
            onSelect={() => select(index)}
            onDelete={() => deleteObj(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default AddMesh;
