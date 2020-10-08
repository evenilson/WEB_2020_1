import {createStore, combineReducers} from 'redux'

const reducers = combineReducers(
    {
        Numero1: function(state, action){
                return{
                    numero1: 6
                }
        },

        Numero2: function(state, action){
                return{
                    numero2: 6
                }
        }
    }
    
)

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig