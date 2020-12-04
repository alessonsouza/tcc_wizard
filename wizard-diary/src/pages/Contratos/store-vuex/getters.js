// export const contratosGetter = ({ contratos }) => { return contratos.contratos }
export function contratosGetter (state) {
  console.log(state)
  return state.contratos.contratos
}
