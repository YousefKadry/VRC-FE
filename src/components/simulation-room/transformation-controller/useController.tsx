import { useControls } from "leva";
import { IMesh, TVec3 } from "../../../models/room";

const useController = (args:{
  selectedMesh:IMesh|null,
  transformationChangeHandler:(type:"position"|"rotation"|"scale", value:TVec3)=>void}) => {
  
  const {selectedMesh, transformationChangeHandler} = args;
  const position = !selectedMesh? [0,0,0] : selectedMesh.position as any
  const rotation = !selectedMesh? [0,0,0] : selectedMesh.rotation as any
  const scale = !selectedMesh? [1,1,1] : selectedMesh.scale as any
  
    const transformations = useControls('Transformations',{
        Translate: { value: position, step: 0.1 , onChange:transformationChangeHandler.bind(null, "position")},
        Rotate: { value: rotation, step: 1.0, max: 360, onChange:transformationChangeHandler.bind(null, "rotation")},
        Scale: { value: scale, step: 0.1, min:0.1, onChange:transformationChangeHandler.bind(null, "scale")},
         })
    
    const mouseController = useControls('Mouse Control',{
      Mode: { options: { translate: 'translate', rotate:'rotate', scale:'scale' } },
      'hide controller': false,
        }, { collapsed: true }) 

    return [transformations, mouseController];
}


export default useController;