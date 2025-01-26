import Events from "./bottomComponents/Events";
import Announcements from "./bottomComponents/Announcements";
import Celebrations from "./bottomComponents/Celebration";


const BottomComponent = () => {
  return (
    <main
      className="w-[100%] grid md:grid-cols-[2fr_1fr] xl:grid-cols-3 gap-5 mb-5"
    >
      <Events />
      <Announcements />
      <Celebrations />
    </main>
  );
};

export default BottomComponent;
