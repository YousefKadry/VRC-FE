import { TMeshGeometryType } from '../../../../models/room';

export interface IMeshGeometryProps {
    geometryType: TMeshGeometryType;
}

const MeshGeometry: React.FC<React.PropsWithChildren<IMeshGeometryProps>> = ({ geometryType }) => {
    switch (geometryType) {
        case 'box':
            return <boxGeometry />;
        case 'capsule':
            return <capsuleGeometry />;
        case 'circle':
            return <circleGeometry />;
        case 'cone':
            return <coneGeometry />;
        case 'cylinder':
            return <cylinderGeometry />;
        case 'dodecahedron':
            return <dodecahedronGeometry />;
        case 'extrude':
            return <extrudeGeometry />;
        case 'icosahedron':
            return <icosahedronGeometry />;
        case 'lathe':
            return <latheGeometry />;
        case 'octahedron':
            return <octahedronGeometry />;
        case 'plane':
            return <planeGeometry />;
        case 'ring':
            return <ringGeometry />;
        case 'shape':
            return <shapeGeometry />;
        case 'sphere':
            return <sphereGeometry />;
        case 'tetrahedron':
            return <tetrahedronGeometry />;
        case 'torus':
            return <torusGeometry />;
        case 'torus-knot':
            return <torusKnotGeometry />;
        case 'tube':
            return <tubeGeometry />;
        default:
            return null;
    }
};

export default MeshGeometry;
