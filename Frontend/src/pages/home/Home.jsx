import MessageContainer from "../../components/messages/MessageContainer";
import Siderbar from "../../components/siderbar/Siderbar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Siderbar />
      <MessageContainer />
    </div>
  );
};

export default Home;
