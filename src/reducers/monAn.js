import { ACTION_TYPE_MON_AN } from "../actions/monAn";

const list = {
    listMonAn : []
}

const monAn = (state = list, action) => {
    switch(action.type){
        case ACTION_TYPE_MON_AN.FETCH_ALL_MON_AN : 
            return {
                ...state ,
                listMonAn : [...action.payload]
            }

        // case ACTION_TYPE_MON_AN.CREATE_MON_AN : 
        //     return {
        //         ...state , 
        //         listMonAn : [...state.listMonAn,...action.payload]
        //     }
        default : 
            return state ;
    }
}

export default monAn;