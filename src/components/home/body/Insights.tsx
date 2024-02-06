import membersIcon from '../../../assets/icons/home-members.svg';
import roomsIcon from '../../../assets/icons/home-rooms.svg';

const InsightsSection = () => {
  return (
    <section className="bg-homeBg p-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="mb-8 md:mr-8 md:flex-4">
          <p className="text-2xl md:text-3xl font-bold text-stats mb-4 md:pt-5">Redefine Your Experience.</p>
          <p className="text-2xl md:text-3xl font-bold text-footer">Reinvent Your Virtual Room.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full md:flex-1 px-2 md:px-20">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={membersIcon} className="w-10 h-10 text-footer" alt="Members Icon" />
            <div className="ml-2">
              <b className="text-xl md:text-2xl font-bold text-footer">1,800</b>
              <div className="text-lg md:text-base text-gray-600 text-footer">Members</div>
            </div>
          </div>
          <div className="flex items-center">
            <img src={roomsIcon} className="w-10 h-10 text-footer" alt="Rooms Icon" />
            <div className="ml-2">
              <b className="text-xl md:text-2xl font-bold text-footer">2,300</b>
              <div className="text-lg md:text-base text-gray-600 text-footer">Rooms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default InsightsSection;
