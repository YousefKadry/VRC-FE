import { TMeshGeometryType } from '../../../../models/room';
import MeshItem from './MeshItem';

const geometryTypes: Record<TMeshGeometryType, { imgURL: string }> = {
    box: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    capsule: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    circle: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    cone: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    cylinder: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    dodecahedron: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    extrude: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    icosahedron: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    lathe: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    octahedron: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    plane: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    ring: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    shape: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    sphere: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    tetrahedron: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    torus: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    'torus-knot': { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
    tube: { imgURL: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item' },
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
