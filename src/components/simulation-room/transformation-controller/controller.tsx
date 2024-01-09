import { useControls } from "leva";

const Controller = () => {

    const transformations = useControls('Transformations',{
        Translate: { value: [0, 0, 0], step: 0.1 },
        Rotate: { value: [0, 0, 0], step: 1.0, max: 360 },
        Scale: { value: [0, 0, 0], step: 0.1, min:0.1 },
         })
    
    const mouseController = useControls('Mouse Control',{
      Mode: { options: { translate: 'translate', rotate:'rotate', scale:'scale' } },
      'hide controller': false,
        }, { collapsed: true }) 

    return [transformations, mouseController];
}


export default Controller;