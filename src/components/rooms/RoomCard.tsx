import { Link } from 'react-router-dom';

const RoomCard = ({ room, index }: { room: any; index: number }) => {
    const roomUrl = `/simulation-room/${room.id}`;

    const onShareButtonClick = (e: any) => {
        // copy the room link to the clipboard
        navigator.clipboard.writeText(room.id).then(() => {
            // display copied to the user
            e.target.disabled = true;
            e.target.innerHTML = 'COPIED!';

            // return to original state after a second
            setTimeout(() => {
                e.target.disabled = false;
                e.target.innerHTML = 'SHARE';
            }, 1000);
        });
    };

    return (
        <div className="bg-secondary rounded-xl overflow-hidden">
            <div className="flex-col space-y-4 text-white mb-3">
                <div className={'h-36'}>
                    <img
                        className={'w-full h-full object-cover'}
                        src={`https://placehold.co/408x144/906c96/eee?font=oswald&text=ROOM ${index + 1}`}
                        alt={'room image'}
                    />
                </div>

                <div className={'h-2/3 px-7 space-y-1'}>
                    <div>
                        <h5 title={room.title} className="font-bold text-2xl truncate">
                            {room.title}
                        </h5>
                    </div>

                    <div>
                        <p title={room.description} className="text-md truncate">
                            {room.description}
                        </p>
                    </div>
                </div>

                <div className={'px-4 space-x-2 mb-2 truncate'}>
                    <button className={'px-3 py-1 hover:bg-[#180a2d] rounded font-medium text-sm'}>
                        <Link to={roomUrl}>OPEN</Link>
                    </button>
                    <button
                        className={
                            'px-3 py-1 hover:bg-[#180a2d] rounded font-medium text-sm transition duration-500 ease-in-out disabled:bg-[#180a2d] disabled:text-gray-500'
                        }
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
