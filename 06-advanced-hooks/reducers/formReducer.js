// 1) Estado Inicial
export const initialState = {
  step: 1,
  formData: {
    name: '',
    email: '',
    password: ''
  }
}

// 2) Función reductora (las opciones que puedo ejecutar a mi estado)

export function formReducer (state, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value
        }
      }
    case 'NEXT_STEP':
      return {
        ...state,
        step: state.step + 1
      }
    case 'PREV_STEP':
      return {
        ...state,
        step: state.step - 1
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}
