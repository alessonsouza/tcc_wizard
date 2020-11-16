// Os getters são como as computers, então toda vez que um estado é alterado, tudo que o getter está importando do estado
// também será alterado
// !! = duas negações
export const hasToken = ({ token }) => !!token// essa funçaõ serve pra dizer se o token existe ou não
