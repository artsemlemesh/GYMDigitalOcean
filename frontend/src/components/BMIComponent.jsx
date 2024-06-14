import { useState } from "react";

const BMIComponent = () => {
  const imageUrl = "/eight.jpg";

  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    bmi: null,
    bmiLevel: null
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) =>  ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const calculateBMI = () => {
    if (formData.weight && formData.height) {
      const heightInMeters = formData.height / 100;
      const calculatedBMI = (
        formData.weight /
        (heightInMeters * heightInMeters)
      ).toFixed(2);

      let bmiLevel = '';
      if (calculatedBMI < 18.5) {
        bmiLevel = 'Underweight';
      } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        bmiLevel = 'Normal weight';
      } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
        bmiLevel = 'Overweight';
      } else {
        bmiLevel = 'Obesity';
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        bmi: calculatedBMI,
        bmiLevel: bmiLevel,
      }));
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <div
        className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">
            Let's Calculate Your <span className="text-red-500">BMI</span>
          </p>
          <p className="text-xl mb-10 text-gray-600 leading-none">
            Easely determine your body mass index with our accurate calculation
            tool
          </p>
          <div className="max-w-lg mx-auto p-8">
            <div className="mb-4">
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="weight/kg"
                value={formData.weight}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-base text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="number"
                id="height"
                name="height"
                placeholder="height/cm"
                value={formData.height}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-base text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <button
            onClick={calculateBMI}
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-700"
          >
            Calculate
          </button>
          {formData.bmi && (
  <div className="mt-6 text-center">
    <p className="text-2xl font-bold inline-block mr-4">Your BMI:</p>
    <p className="text-xl inline-block mr-4">{formData.bmi}</p>
    <p className={`text-xl inline-block ${formData.bmiLevel === 'Underweight' ? 'text-yellow-500' : formData.bmiLevel === 'Normal weight' ? 'text-green-500' : formData.bmiLevel === 'Overweight' ? 'text-yellow-500' : 'text-red-500'}`}>
      {formData.bmiLevel}
    </p>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default BMIComponent;
