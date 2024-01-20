import MeshItem from './MeshItem';

const geometryTypes = [
    {
        type: 'box',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'capsule',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'cone',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'cylinder',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'dodecahedron',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'edges',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'extrude',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'lathe',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'octahedron',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'plane',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'ring',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'shape',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'sphere',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'tetrahedron',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'torus',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'torus-knot',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
    {
        type: 'tube',
        imgUrl: 'https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item',
    },
];
const Meshses3D = () => {
    return (
        <div className={'overflow-y-auto max-h-[86vh]'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 '}>
                {geometryTypes.map((item) => {
                    return <MeshItem item={item} />;
                })}
            </div>
        </div>
    );
};

export default Meshses3D;
