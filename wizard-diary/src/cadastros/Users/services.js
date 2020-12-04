export default {
  addUser: { method: 'POST', url: 'users' },
  updateUser: { method: 'PUT', url: 'users{/user_id}' },
  deleteUser: { method: 'DELETE', url: 'users{/user_id}' }
}
