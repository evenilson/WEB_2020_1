import {createStore, combineReducers} from 'redux'

const reducers = combineReducers(
    {
        Numero1: function(state, action){
            switch(action.type){
                case 'NOVO_RESULT':
                    return{
                        numero1: action.payload
                    }
                default:
                    return{
                        numero1: 6
                    }
            }
        },

        Numero2: function(state, action){
            console.log(action.type)
            switch(action.type){
                case 'NOVO_RESULT':
                    return{
                        numero2: action.payload
                    }
                default:
                    return{
                        numero2: 6
                    }
            }
        },
    }
)

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig