import { createContext, useEffect, useReducer } from "react"
import { AppReducer } from "./AppReducer"
import { db } from "./firestore"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore/lite"

export const GlobalContext = createContext()

export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    employees: [],
  })

  useEffect(() => {
    async function getEmployees() {
      const emoloyees = collection(db, "employees")
      const employeeSnapshot = await getDocs(emoloyees)
      const employeeList = employeeSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      console.log(employeeList)
      dispatch({ type: "INIT_EMPLOYEES", payload: employeeList })
    }

    getEmployees()
  }, [])

  const addEmployee = async (employee) => {
    const docRef = await addDoc(collection(db, "employees"), employee)
    dispatch({ type: "ADD_EMPLOYEE", payload: { id: docRef.id, ...employee } })
  }

  const editEmployee = async (employee) => {
    const docRef = doc(db, "employees", employee.id)
    await updateDoc(docRef, employee)
    dispatch({ type: "EDIT_EMPLOYEE", payload: employee })
  }

  const removeEmployee = async (id) => {
    const docRef = doc(db, "employees", id)
    await deleteDoc(docRef)
    dispatch({ type: "REMOVE_EMPLOYEE", payload: id })
  }
  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
