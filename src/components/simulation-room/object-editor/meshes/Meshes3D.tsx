import MeshItem from './MeshItem';

import { TMeshGeometryType } from '../../../../models/room';

const geometryTypes: Record<TMeshGeometryType, { imgURL: string }> = {
    box: { imgURL: 'https://i.postimg.cc/pX1q2Xky/box.jpg' },
    capsule: { imgURL: 'https://i.postimg.cc/g2X4rFBs/capsule.jpg' },
    circle: { imgURL: 'https://i.postimg.cc/HkqzyZqg/circle.jpg' },
    cone: { imgURL: 'https://i.postimg.cc/hGVrb8n7/cone.jpg' },
    cylinder: { imgURL: 'https://i.postimg.cc/C5rHLmG9/cylinder.jpg' },
    dodecahedron: { imgURL: 'https://i.postimg.cc/SQgGrNBV/dodecahedron.jpg' },
    extrude: { imgURL: 'https://i.postimg.cc/NMYxNyGC/extrude.jpg' },
    icosahedron: { imgURL: 'https://i.postimg.cc/vTZtspVW/icosahedron.jpg' },
    lathe: { imgURL: 'https://i.postimg.cc/FRZVw97r/lathe.jpg' },
    octahedron: { imgURL: 'https://i.postimg.cc/02r0H1xv/octahedron.jpg' },
    plane: { imgURL: 'https://i.postimg.cc/FsqgMCsL/plane.jpg' },
    ring: { imgURL: 'https://i.postimg.cc/639drDzD/ring.jpg' },
    shape: { imgURL: 'https://i.postimg.cc/s1FxcWsv/triangle.jpg' },
    sphere: { imgURL: 'https://i.postimg.cc/63YCYYmT/sphere.jpg' },
    tetrahedron: { imgURL: 'https://i.postimg.cc/gjj858Cs/tetrahedron.jpg' },
    torus: { imgURL: 'https://i.postimg.cc/3rfgGfGc/torus.jpg' },
    'torus-knot': { imgURL: 'https://i.postimg.cc/wTtDQ5cT/torus-knot.jpg.png' },
    tube: { imgURL: 'https://i.postimg.cc/SRPCpjqh/tube.jpg' },
};

const Meshes3D = () => {
    return (
        <div className={'overflow-auto h-full'}>
            <ul className={'grid grid-cols-2 gap-4 select-none'}>
                {Object.entries(geometryTypes).map(([type, info]) => {
                    return <MeshItem key={type} type={type as TMeshGeometryType} imgURL={info.imgURL} />;
                })}
            </ul>
        </div>
    );
};

export default Meshes3D;
