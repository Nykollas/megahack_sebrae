//Login
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_LOGIN_LABEL = 'SET_LOGIN_LABEL';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const IS_INSIDE_DRAWER = 'IS_INSIDE_DRAWER';
export const SET_ADD = "SET_ADD";
export const SET_UPDATE = "SET_UPDATE";
export const SET_ID = "SET_ID";
export const ADD_EMPRESA = "ADD_EMPRESA";
export const UPDATE_EMPRESA = "UPDATE_EMPRESA";
export const DEL_EMPRESA = "DEL_EMPRESA";
export const SET_ADD_DATA = "SET_ADD_DATA";
export const SET_UPDATE_DATA = "SET_UPDATE_DATA";
export const SET_LAST_EMPRESA = "SET_LAST_EMPRESA";
export const CLEAN_EMPRESAS = "CLEAN_EMPRESAS";
export const CLEAN_CREDENTIALS = "CLEAN_CREDENTIALS";

//Login Actions
const setEmail = (email) => {
    return { type: SET_EMAIL, email: email }
}

const setPassword = (pswd) => {
    return { type: SET_PASSWORD, password: pswd }
}

const setLoginLabel = (label) => {
    return { type: SET_LOGIN_LABEL, label: label }
}

const openDrawer = (value) => {
    return { type: OPEN_DRAWER, drawer_open: value }
}

const isInsideDrawer = (value) => {
    return { type: IS_INSIDE_DRAWER, is_inside_drawer: value }
}

const setAdd = (value) => {
    return { type: SET_ADD, adding: value }
}

const setUpdate = (value, index) => {
    
    return { type: SET_UPDATE, editing: value, index:index }
}

const setId = (value) => {
    return { type: SET_ID, id: value }
}

const cleanEmpresas = () => {
    return { type: CLEAN_EMPRESAS}
}




const updateEmpresa = (value, index) => {
    
    return {
        type: UPDATE_EMPRESA,
         empresa: {
            _id:value._id,
            name: value.name,
            email: value.email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel: value.tel,
            category: value.category
        },
        index:index
    }
}

const addEmpresa = (value) => {
    return {
        type: ADD_EMPRESA, empresa: {
            _id:value._id,
            name: value.name,
            email: value.email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel: value.tel,
            category: value.category
        }
    }
}

const setLastEmpresa = (value) => {
    return {
        type: SET_LAST_EMPRESA, 
        empresa: {
            id_:value._id,
            name: value.name,
            email: value.email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel: value.tel,
            category: value.category
        },
    }
}

const setAddData = (value) => {
    return {
        type: SET_ADD_DATA, add_data: {
            _id:value._id,
            name: value.name,
            email: value.email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel: value.tel,
            category: value.category
        }
    }
}

const setUpdateData = (value) => {
    
    return {
        type: SET_UPDATE_DATA, update_data: {
            _id:value._id,
            name: value.name,
            email: value.email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel: value.tel,
            category: value.category
        }
    }
}

const removeEmpresa = (value) => {
    return {
        type: DEL_EMPRESA, index: value
    }
}

const cleanCredentials = () => {
    return {
        type:CLEAN_CREDENTIALS
    }
}

export { setEmail };
export { setPassword };
export { setLoginLabel };
export { openDrawer };
export { isInsideDrawer };
export { setAdd };
export { setUpdate };
export { setId };
export { addEmpresa };
export { removeEmpresa };
export { setAddData };
export { setUpdateData  }
export { setLastEmpresa };
export { updateEmpresa };
export { cleanEmpresas };
export { cleanCredentials }