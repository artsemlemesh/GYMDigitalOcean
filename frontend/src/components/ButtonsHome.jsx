import { FaDumbbell, FaChartLine } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

const ButtonsHome = () => {
  return (
    <div className="flex justify-around space-x-4 p-10">
        <div className="bg-pink-500 py-10 px-8 text-black font-bold uppercase text-xs hover:bg-black hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
        <FaDumbbell className="text-6xl mb-4"/>
        <h1 className="text-xl mb-2">Workout</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta rem obcaecati eaque? Ipsa iure vel, sapiente nostrum itaque fugiat incidunt tempora nemo at harum nobis suscipit eligendi distinctio veniam!</p>
        </div>
        <div className="bg-green-500 py-10 px-8 text-black font-bold uppercase text-xs hover:bg-black hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
        <GiFruitBowl className="text-6xl mb-4"/>
        <h1 className="text-xl mb-2">Nutrition</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta rem obcaecati eaque? Ipsa iure vel, sapiente nostrum itaque fugiat incidunt tempora nemo at harum nobis suscipit eligendi distinctio veniam!</p>
        </div>
        <div className="bg-blue-500 py-10 px-8 text-black font-bold uppercase text-xs hover:bg-black hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
        <FaChartLine className="text-6xl mb-4"/>
        <h1 className="text-xl mb-2">Progression</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta rem obcaecati eaque? Ipsa iure vel, sapiente nostrum itaque fugiat incidunt tempora nemo at harum nobis suscipit eligendi distinctio veniam!</p>
        </div>
            
    </div>
  );
};

export default ButtonsHome;
