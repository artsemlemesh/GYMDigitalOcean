


const SingleClass = ({ className, classTime, coachName, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{className}</div>
        <p className="text-gray-700 text-base mb-2"><strong>Time:</strong> {classTime} </p>
        <p className="text-gray-700 text-base mb-4"><strong>Coach:</strong> {coachName}</p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> Join now</button>
      </div>
    </div>
  );
};

export default SingleClass;
