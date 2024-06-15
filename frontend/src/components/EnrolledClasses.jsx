import { useDispatch, useSelector } from "react-redux";
// import {fetchEnrolledClasses} from '../features/schedule/enrolledClassSlice'
import { useEffect } from "react";
import { fetchSchedules, leaveClass } from "../features/schedule/scheduleSlice";
import { useNavigate } from "react-router-dom";

const EnrolledClasses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schedules = useSelector((state) => state.schedule.schedules.data);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      dispatch(fetchSchedules());
    }
  }, [user, dispatch, navigate]);

  if (!user) {
    return null;
  }

  const enrolledClasses = schedules.filter((schedule) =>
    schedule.enrolled_participants.includes(user.id)
  );
 


  const handleLeaveClass = (classId) => {
    dispatch(leaveClass(classId)).then(()=> {
      dispatch(fetchSchedules()) //refreshes the schedule after leaving the class
    })

  }


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Enrolled Classes</h2>
      {enrolledClasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enrolledClasses.map((classItem) => (
            <div
              key={classItem.id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6"
            >
              <h3 className="font-bold text-xl mb-2">
                {classItem.class_instance.name}
              </h3>
              <p className="text-gray-700 text-base mb-2">
                {" "}
                <strong>Time:</strong> {classItem.start_time} -{" "}
                {classItem.end_time}
              </p>
              <p className="text-gray-700 text-base mb-2">
                {" "}
                <strong>Coach:</strong>{" "}
                {classItem.class_instance.instructor.user.username}
              </p>
              <button onClick={() => handleLeaveClass(classItem.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Leave Class
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">You haven't enrolled in any class</p>
      )}
    </div>
  );
};

export default EnrolledClasses;
