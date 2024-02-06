import { Clone, useGLTF } from '@react-three/drei';
import { IModel } from '../../../../models/room';

export interface IGLTFModelProps {
    gltfModel: IModel;
}

const GLTFModel: React.FC<IGLTFModelProps> = (props) => {
    const { URL } = props.gltfModel;

    const gltf = useGLTF(`https://corsproxy.io/?${URL}`);

    return <Clone object={gltf.scene} castShadow receiveShadow />;
};

export default GLTFModel;
