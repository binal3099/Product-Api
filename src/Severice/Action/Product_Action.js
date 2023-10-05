import axios from "axios"
import { base_api } from '../../Api/Product_api'

export const Product_addAsync = (data) => {
    return async dispatch => {
        dispatch(loading())

       
        axios.post(base_api + '/Product', data).then((res)=>{
            // console.log("res",res);
            dispatch(get_dataAsync(res.data));
        }).catch((err)=>{
            console.log("ewrr",err);
        })
    }
}

const loading = () => {
    return {
        type: "Loading"
    }
}

export const allData = (data) => {
    return {
        type: "AllData",
        payload: data
    }
}

export const get_dataAsync = () => {
    return async dispatch => {
        dispatch(loading())


        axios.get(base_api + '/Product').then((res)=>{
            console.log("res",res.data);
            dispatch(allData(res.data))
        }).catch((err)=>{
            console.log("ewrr",err);
        })
    }
}

export const Product_editAsync = (id,data) => {
    return async dispatch => {
        dispatch(loading());

        await axios.get(base_api + `/Product/${id}`).then((res)=>{
            console.log("res",res);
            dispatch(singleProduct(res.data));
        }).catch((err)=>{
            console.log("ewrr",err);
        })
    }
}

const singleProduct = (data) => {
    return{
        type: "Single_product",
        payload: data

    }
}

export const product_updateAsync = (id,data)=>{
    // console.log("data",data);
    return async dispatch => {
        dispatch(loading());

        await axios.patch(base_api + `/Product/${id}`, data).then((res)=>{
            console.log("res>>>>>>",res.data);
            dispatch(get_dataAsync());
        }).catch((err)=>{
            console.log("ewrr",err);
        })
    }
}

export const product_removeAsync = (id)=>{
    // console.log("data",data);
    return async dispatch => {
        dispatch(loading());

        await axios.delete(base_api + `/Product/${id}`).then((res)=>{
            console.log("res>>>>>>",res.data);
            dispatch(get_dataAsync());
        }).catch((err)=>{
            console.log("ewrr",err);
        })
    }
}

