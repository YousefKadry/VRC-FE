import { TMeshGeometryType } from '../../../../models/room';
import MeshItem from './MeshItem';

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

const Meshses3D = () => {
    return (
        <div className={'overflow-y-auto max-h-[86vh]'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 '}>
                {Object.entries(geometryTypes).map(([type, info]) => {
                    return <MeshItem key={type} type={type as TMeshGeometryType} imgURL={info.imgURL} />;
                })}
            </div>
        </div>
    );
};

export default Meshses3D;
