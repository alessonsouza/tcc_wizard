export default {
  addContrato: { method: 'POST', url: 'contratos' },
  updateContrato: { method: 'PUT', url: 'contratos{/id_con}' },
  deleteContrato: { method: 'DELETE', url: 'contratos{/id}' }
}
