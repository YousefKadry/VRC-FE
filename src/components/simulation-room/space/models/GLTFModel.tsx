import { useGLTF } from '@react-three/drei';

const GLTFModel: React.FC<{ gltfURL: string }> = (props) => {
    const { gltfURL } = props;
    const gltf = useGLTF(`https://corsproxy.io/?${gltfURL}`);
    gltf.scene.traverse((child) => {
        child.castShadow = true;
        child.receiveShadow = true;
    });

    return <primitive object={gltf.scene} />;
};

export default GLTFModel;
