export const AppReducer = (state, action) => {
  switch (action.type) {
    case "INIT_EMPLOYEES":
      return {
        ...state,
        employees: action.payload,
      }
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload,
        ),
      }
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      }
    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee,
        ),
      }
    default:
      return state
  }
}
