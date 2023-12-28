import RoomCard from "./RoomCard.tsx";

const ROOMS = [
    {
        imageUrl: "https://random.imagecdn.app/600/600",
        name: "Room 1",
        description: "This is the first room",
        url: "https://placeholder.siemens.com/room1",
    },
    {
        imageUrl: "https://random.imagecdn.app/500/500",
        name: "Room 2",
        description: "This is the second room",
        url: "https://placeholder.siemens.com/room2",
    },
    {
        imageUrl: "https://random.imagecdn.app/700/700",
        name: "Room 3",
        description: "This is the third room",
        url: "https://placeholder.siemens.com/room3",
    },

];

const Rooms = () => {
    return (
        <div className={"py-10 px-20 space-y-10"}>
            <div>
                <h1 className={"text-3xl font-bold"}>My Rooms</h1>
                <p className={"xl:text-xl sm:text-lg font-semibold"}>You can find your rooms here.</p>
            </div>

            <div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-10"}>
                    {ROOMS.map((room, index) => (
                        <RoomCard key={index} room={room} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rooms;
