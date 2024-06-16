import { Link } from "react-router-dom";
import ButtonsHome from "../components/ButtonsHome";
import Gallery from "../components/PhotoGallery";
import BMIComponent from "../components/BMIComponent";

const HomePage = () => {
  return (
    <div className="relative bg-white text-gray-800 min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2/3-screen md:h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="min-w-full min-h-full object-cover object-bottom"
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-start p-6 h-2/3-screen md:w-1/2 md:h-full">
          <p className="text-sm md:text-lg uppercase font-bold">Services</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Hello world</h1>
          <p className="text-xl md:text-3xl mt-2 mb-10">Join our team</p>
          <Link
            to="/contact"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-700 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
      <ButtonsHome />
      <Gallery />
      <BMIComponent />
    </div>
  );
};

export default HomePage;