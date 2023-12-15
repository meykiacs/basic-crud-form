import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalState";

export const AddEmployee = () => {
  const navigate = useNavigate();
  const { addEmployee } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [designation, setDesignation] = useState('');

  const onSubmit = (e) => {
    addEmployee({
      name,
      location,
      designation
    });

    e.preventDefault();
    navigate("/");
  };


  return (
    <form className="w-full max-w-sm container mt-20 mx-auto" onSubmit={onSubmit}>
      <div className="w-full mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
          نام
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="نام" />
      </div>
      <div className="w-full mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
          محل
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="محل" />
      </div>
      <div className="w-full mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
          موقعیت شغلی
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="موقعیت شغلی" />
      </div>
      <div className="flex items-center justify-between">
        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          افزودن
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/">انصراف</Link>
      </div>
    </form>
  );
};

