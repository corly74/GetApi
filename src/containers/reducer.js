
import produce from 'immer';

import {
    LOAD_TABLE_SUCCESS,
    LOAD_TABLE_ERROR,
} from './constants';

export const initialState = {
    projectList: [],
    error: false,
};
const projectReducer = produce((draft, action) => {
    switch (action.type) {
        case LOAD_TABLE_SUCCESS:
            draft.projectList = action.project;
            break;
        case LOAD_TABLE_ERROR:
            draft.loading = false;
            break;

    }
}, initialState);

export default projectReducer;
