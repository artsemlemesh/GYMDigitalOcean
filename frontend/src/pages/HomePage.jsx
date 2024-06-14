import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ButtonsHome from "../components/ButtonsHome";
import Gallery from "../components/PhotoGallery";
import BMIComponent from "../components/BMIComponent";
// import imageUrl from 'ho'


const HomePage = () => {

  const imageUrl = '/home.jpg'

  return (
    <div className="bg-white text-gray-800">
      <div
        className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Hello world</p>
          <p className="text-2xl mb-10 leading-none">Join our team</p>
          <Link
            to='/contact'
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-700"
          >
            Contact us
          </Link>
        </div>
      </div>

  <ButtonsHome/>
    <Gallery/>
    <BMIComponent/>
    </div>
  );
};

export default HomePage;
