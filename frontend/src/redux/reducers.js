import { SET_PASSWORD,
         SET_EMAIL,
         SET_LOGIN_LABEL,
         OPEN_DRAWER,
         IS_INSIDE_DRAWER,
         SET_ADD,
         SET_ID,
         SET_ADD_DATA,
         SET_UPDATE_DATA,
         ADD_EMPRESA,
         DEL_EMPRESA,
         SET_LAST_EMPRESA,
         UPDATE_EMPRESA,
         SET_UPDATE,
         CLEAN_EMPRESAS,
         CLEAN_CREDENTIALS
     } from './actions';

const initialState = {

    id:"",
    password:"",
    email:"",
    login_label:"",
    drawer_open:undefined,
    is_inside_drawer:"",
    adding:false,
    editing:false,
    empresas:new Array(),

    editIndex:0,

    add_data:{
        _id:"",
        name:"",
        phone:"",
        email:"",
        street:"",
        place:"",
        city:"",
        uf:"",
    },

    update_data:{
        _id:"",
        name:"",
        phone:"",
        email:"",
        street:"",
        place:"",
        city:"",
        uf:"",
    },

}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case SET_PASSWORD:
            return Object.assign({}, state, {
                password:action.password
            })
        case SET_EMAIL:
            return Object.assign({}, state, {
                email:action.email
            });
        case SET_LOGIN_LABEL:
            return Object.assign({}, state, {
                login_label:action.label
            });
        case OPEN_DRAWER:
            return Object.assign({}, state, {
                drawer_open:action.drawer_open
            });
        case IS_INSIDE_DRAWER:
            return Object.assign({}, state, {
                is_inside_drawer:action.is_inside_drawer
            });
        case SET_ADD:
            return Object.assign({}, state, {
                adding:action.adding
            });
        case SET_UPDATE:
            return Object.assign({}, state, {
                editing:action.editing,
                editIndex:action.index
            });
        case SET_ID:
            return Object.assign({}, state, {
                id:action.id
            });
        case SET_ADD_DATA:
            return Object.assign({}, state, {
                add_data: action.add_data
            });
        case SET_UPDATE_DATA:
                return Object.assign({}, state, {
                update_data: action.update_data
        });
        case ADD_EMPRESA:
            return Object.assign({}, state, {
                empresas: [...state.empresas, action.empresa]
            });
        case SET_LAST_EMPRESA:
            return Object.assign({}, state, {
                empresas:state.empresas.filter( (val, index, arr) => {
                    if(index != arr.length-1){
                        return val;
                    }else{
                        return action.empresa
                    }
                })
            });
        case UPDATE_EMPRESA:
            return Object.assign({}, state, {
                empresas:state.empresas.filter( (val, index, arr) => {
                    
                    if(index == action.index){
                        
                        return action.empresa;
                    }else{
                        return val;
                    }
                })  
            });
        
        case DEL_EMPRESA:
            return Object.assign({}, state, {
                empresas:state.empresas.filter( (val, index, arr) => {
                    if(index !== action.index){
                        return val;
                    }
                })
            });
        case CLEAN_EMPRESAS:
            return Object.assign({}, state, {
                empresas:state.empresas.filter( (val, index, arr) => {
                    if(index > arr.length){

                        return;
                    }
                })  
            });
        case CLEAN_CREDENTIALS:
            return Object.assign({}, state, {email:"", password:""});

        default:
            return state;
    }
}

export default reducer;