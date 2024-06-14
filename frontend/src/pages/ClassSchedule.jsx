import SingleClass from "../components/SingleClass";
import Days from "../features/schedule/Days";

const ClassSchedule = () => {
    // const schedule = [
    //   {
    //     day: "Monday",
    //     classes: [
    //       { time: "6:00 AM - 7:00 AM", name: "Yoga" },
    //       { time: "8:00 AM - 9:00 AM", name: "HIIT" },
    //       { time: "5:00 PM - 6:00 PM", name: "Strength Training" },
    //     ],
    //   },
    //   {
    //     day: "Tuesday",
    //     classes: [
    //       { time: "6:00 AM - 7:00 AM", name: "Pilates" },
    //       { time: "8:00 AM - 9:00 AM", name: "Yoga" },
    //       { time: "5:00 PM - 6:00 PM", name: "HIIT" },
    //     ],
    //   },
    //   // Add more days and classes as needed
    // ];
  
    return (
      <>
        <div className="bg-gray-200 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800">Class Schedule</h1>
            <p className="mt-4 text-gray-600">
              Stay fit and healthy with our variety of classes.
            </p>
          </div>
        </div>
  
        {/* class schedule table */}
        <div className="container mx-auto px-4 py-8">
          {/* <header className="bg-gray-200 py-12">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-800">Class Schedule</h1>
              <p className="mt-4 text-gray-600">
                Stay fit and healthy with our variety of classes.
              </p>
            </div>
          </header> */}
          <Days/>
          
          {/* <div className="flex flex-wrap -mx-2 mt-8">
            {schedule.map((daySchedule) => (
              <div
                key={daySchedule.day}
                className="w-full md:w-1/2 lg:w-1/3 px-2 py-4"
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">{daySchedule.day}</h3>
                    <ul>
                      {daySchedule.classes.map((classItem, index) => (
                        <li key={index} className="py-2 border-b">
                          <span className="block text-gray-700 font-semibold">
                            {classItem.time}
                          </span>
                          <span className="block text-gray-600">
                            {classItem.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            ))}
                          <SingleClass/>

          </div> */}
        </div>
      </>
    );
  };
  
  export default ClassSchedule;
  