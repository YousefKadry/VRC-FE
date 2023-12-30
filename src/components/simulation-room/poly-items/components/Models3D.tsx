import Item3D from "./item3D.tsx";

const data = [
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 1,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
    {
        id: 2,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },{
        id: 3,
        imgUrl: "https://craftypixels.com/placeholder-image/500x500/e2d6f3/000&text=3D Item",
    },
]
const Models3D = () => {

    return (
        <div className={"overflow-y-auto max-h-[86vh]"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 "}>
                {
                    data.map((item, index) => {
                        return <Item3D key={index} item={item}/>
                    })
                }
            </div>
        </div>

    );
}

export default Models3D
