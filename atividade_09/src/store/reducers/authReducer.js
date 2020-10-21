const INITIAL_STATE = {
    authMsg: null,
    user: null
}

export default function (state = INITIAL_STATE, action){
    return{
        ...state,
        authMsg: 'Usuario logado com sucesso',
        user: 'evenilson@edu.com.br'
    }
}