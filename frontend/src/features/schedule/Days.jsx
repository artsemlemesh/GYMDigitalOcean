import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleClass from "../../components/SingleClass";
import { fetchSchedules } from "./scheduleSlice";

const Days = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const dispatch = useDispatch();
  const schedules = useSelector((state) => state.schedule.schedules);

  useEffect(() => {
    dispatch(fetchSchedules());
  }, [dispatch]);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  function handleOnClick(index) {
    setCurrentTabIndex(index);
  }


  //returns from future and past weeks 
  const filteredSchedules = schedules.data.filter(schedule => {
    const scheduleDay = new Date(schedule.date).getDay();
    return scheduleDay === (currentTabIndex === 6 ? 0 : currentTabIndex + 1); 
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Class Schedule</h1>
      <div className="flex justify-center mb-4">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            onClick={() => handleOnClick(index)}
            className={`cursor-pointer py-2 px-4 mx-1 rounded-lg text-white ${
              currentTabIndex === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSchedules.map((schedule, index) => (
          <SingleClass
          classId={schedule.id}
  key={index}
  className={schedule.class_instance.name}
  classTime={`${schedule.start_time} - ${schedule.end_time}`}
  coachName={schedule.class_instance.instructor.user.username}
  imageUrl={schedule.class_instance.image} // Replace with actual image URL if available
/>
        ))}
      </div>
    </div>
  );
};

export default Days;
