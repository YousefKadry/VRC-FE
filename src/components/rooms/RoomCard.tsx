const RoomCard = ({room}: { room: any }) => {

    const onShareButtonClick = (e: any) => {
        // copy the room link to the clipboard
        navigator.clipboard.writeText(room.url).then(() => {

            // display copied to the user
            e.target.disabled = true
            e.target.innerHTML = 'COPIED!'

            // return to original state after a second
            setTimeout(()=>{
                e.target.disabled = false
                e.target.innerHTML = 'SHARE'
            }, 1000)

        })
    }

    return (
        <div className="bg-secondary rounded-xl">
            <div className="flex-col space-y-4 text-white mb-3">

                <div className={"h-36 overflow-hidden"}>
                    <img src={room.imageUrl} alt={"room image"}/>
                </div>

                <div className={"h-2/3 px-7 space-y-1 "}>
                    <div>
                        <h5 className="font-bold text-2xl">{room.name}</h5>
                    </div>

                    <div>
                        <p className="text-md">{room.description}</p>
                    </div>
                </div>

                <div className={"px-4 space-x-2 mb-2"}>
                    <button className={"px-3 py-1 hover:bg-[#180a2d] rounded font-medium text-sm"}>
                        <a href={room.url} target={"_blank"}>
                            OPEN
                        </a>
                    </button>
                    <button
                        className={"px-3 py-1 hover:bg-[#180a2d] rounded font-medium text-sm transition duration-500 ease-in-out disabled:bg-[#180a2d] disabled:text-gray-500"}
                        onClick={onShareButtonClick}
                    >
                        SHARE
                    </button>
                </div>

            </div>
        </div>
    );
};

export default RoomCard;


