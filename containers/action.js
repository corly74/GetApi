import {
    LOAD_TABLE,
    LOAD_TABLE_SUCCESS,
    LOAD_TABLE_ERROR,

}from './constants'

import {loadingTale} from './saga'



export function loadTableSucess(project){
    return{
        type:LOAD_TABLE_SUCCESS,
        project,
    };
}

export function loadTableError(error){
    return{
        type:LOAD_TABLE_ERROR,
        error,
    };
}
