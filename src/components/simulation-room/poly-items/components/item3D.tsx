const Item3D = (item: any) => {
    console.log(`${item.imgUrl}${Math.floor(Math.random() * 8)}`)
    return (
        <div className={"rounded-lg bg-gradient-to-r from-[#8c43e6] to-[#8b6bb2] p-0.5 cursor-grabbing"}>
            <img
                className={"rounded-lg w-full aspect-square"}
                src={item.item.imgUrl}
            />

            <div className={"p-2"}>
                <h4 className={"text-white font-bold"}>{item.item.name}</h4>
                <p className={"text-white"}>{item.item.description}</p>
            </div>
        </div>
    );
}

export default Item3D
