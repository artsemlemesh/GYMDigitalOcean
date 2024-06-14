import { useDispatch, useSelector } from "react-redux";
import { fetchSchedules } from "../features/schedule/scheduleSlice";
import { useEffect } from "react";

const Trainers = () => {
  const dispatch = useDispatch();
  const schedules = useSelector((state) => state.schedule.schedules);

  useEffect(() => {
    dispatch(fetchSchedules());
  }, [dispatch]);

  // Remove duplicate trainers
  const uniqueTrainers = schedules.data.reduce((acc, schedule) => {
    const trainer = schedule.class_instance.instructor;
    if (!acc.some((item) => item.user.username === trainer.user.username)) {
      acc.push(trainer);
    }
    return acc;
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Trainers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {uniqueTrainers.map((trainer, index) => {
          const backgroundImage = trainer.user_image || "one.jpg"; // Fallback image
          return (
            <div
              key={index}
              className="relative max-w-sm rounded overflow-hidden shadow-lg bg-cover bg-center h-48"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                <div className="bg-white bg-opacity-75 p-4 rounded">
                  <h2 className="font-bold text-xl mb-2">
                    Coach: {trainer.user.username}
                  </h2>
                  <p className="text-gray-700 text-base">
                    Bio: {trainer.bio}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trainers;
