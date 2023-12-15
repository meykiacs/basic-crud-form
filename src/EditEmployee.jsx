import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./GlobalState"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Skeleton } from "./Skeleton"

export const EditEmployee = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { editEmployee, employees } = useContext(GlobalContext)
  const [selectedUser, setSeletedUser] = useState({
    id: null,
    name: "",
    designation: "",
    location: "",
  })

  useEffect(() => {
    const selectedUser = employees.find((employee) => employee.id === id)
    setSeletedUser(selectedUser)
  }, [id, employees])

  const onSubmit = (e) => {
    e.preventDefault()
    editEmployee(selectedUser).then(() => {
      navigate("/")
    })
  }

  const handleOnChange = (userKey, value) =>
    setSeletedUser({
      ...selectedUser,
      [userKey]: value,
    })

  if (!selectedUser || !selectedUser.id) {
    return (
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <Skeleton />
      </div>
    )
  }

  return (
    <form
      className="w-full max-w-sm container mt-20 mx-auto"
      onSubmit={onSubmit}
    >
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="name"
        >
          نام
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedUser.name}
          onChange={(e) => handleOnChange("name", e.target.value)}
          type="text"
          placeholder="نام"
        />
      </div>
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="location"
        >
          محل
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedUser.location}
          onChange={(e) => handleOnChange("location", e.target.value)}
          type="text"
          placeholder="محل"
        />
      </div>
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="designation"
        >
          موقعیت شغلی
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedUser.designation}
          onChange={(e) => handleOnChange("designation", e.target.value)}
          type="text"
          placeholder="موقعیت شغلی"
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
          ویرایش
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/">انصراف</Link>
      </div>
    </form>
  )
}
