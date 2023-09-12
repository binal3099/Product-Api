import axios from "axios"
import {base_api} from '../../Api/Product_api'
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../FireBase"

export const Product_addAsync = (data) =>{
    return async dispatch =>{
        dispatch(loading())

        return async dispatch =>{
            // await setDoc(doc(db, "students", "2"), data);
            await addDoc(collection(db, "Product"), data);
            dispatch(get_dataAsync(data))
        }

        // axios.post(base_api + '/Product', data).then((res)=>{
        //     // console.log("res",res);
        //     dispatch(get_dataAsync(res.data));
        // }).catch((err)=>{
        //     console.log("ewrr",err);
        // })
    }
}

const loading = () =>{
    return{
        type: "Loading"
    }
}

export const allData = (data) =>{
    return{
        type: "AllData",
        payload: data
    }
}

export const get_dataAsync = () =>{
    return dispatch =>{
        dispatch(loading())

        axios.get(base_api + '/Product').then((res)=>{
            console.log("res",res.data);
            dispatch(allData(res.data))
        }).catch((err)=>{
            console.log("ewrr",err);
        })
    }
}