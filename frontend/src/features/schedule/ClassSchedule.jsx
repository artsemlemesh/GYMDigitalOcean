import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors, fetchClasses, fetchSchedules } from "./scheduleSlice";


//no need to use, replaced by SingleClass component with prpos which is being used in Days
const ScheduleComponent = () => {
  const dispatch = useDispatch();
  const instructors = useSelector((state) => state.schedule.instructors);
  const classes = useSelector((state) => state.schedule.classes);
  const schedule = useSelector((state) => state.schedule.schedules);

  useEffect(() => {
    dispatch(fetchInstructors());
    dispatch(fetchSchedules());
    dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="h-48 bg-cover bg-center">
        schedule Component
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <ul>
            {classes.data.map((classItem) => (
              <li key={classItem.id}>{classItem.name}</li>
            ))}
          </ul>
        </div>
        <div className="text-gray-700 text-base mb-2">
          <strong>Time:</strong>
          <ul>
            {schedule.data.map((sched) => (
              <li key={sched.id}>
                {sched.class_instance.name} - {sched.date} - {sched.start_time} to{" "}
                {sched.end_time}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-gray-700 text-base mb-4">
          <strong>Coach:</strong>
          <ul>
            {instructors.data.map((instructor) => (
              <li key={instructor.id}>{instructor.user.username}</li>
            ))}
          </ul>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Join now
        </button>
      </div>
    </div>
  );
};

export default ScheduleComponent;
