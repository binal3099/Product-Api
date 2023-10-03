import axios from "axios"
import { base_api } from '../../Api/Product_api'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../../FireBase"

export const Product_addAsync = (data) => {
    return async dispatch => {
        dispatch(loading())

        // firebase

        // await setDoc(doc(db, "students", "2"), data);
        // await addDoc(collection(db, "Product"), data);
        // console.log(data,"dt");
        // dispatch(get_dataAsync(data))


        // api axios

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


        //(firebaase curd)

        // let get_fire = [];

        // const querySnapshot = await getDocs(collection(db, "Product"));
        // querySnapshot.forEach((doc) => {

        //     let get_firbase = { ...doc.data(), id: doc.id }
        //     get_fire = [...get_fire, get_firbase];

        //     dispatch(allData(get_fire));

        //     // console.log(doc.id, " => ", doc.data());
        // });


        // (Api read crud)
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
        // console.log("id", id);

        // const docRef = doc(db, "Product", `${id}`);
        // const docSnap = await getDoc(docRef);

        // let d = {...docSnap.data(), id: id}
        // // console.log(docSnap.data(),"docSnap");

        // dispatch(singleProduct(d));


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


        // firebase 

        // await updateDoc(doc(db, "Product", `${id}`), data);
          
        // dispatch(get_dataAsync());


        // axios api

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

        // firebase

        // await deleteDoc(doc(db, "Product", `${id}`));
          
        // dispatch(get_dataAsync());


        // axious api

        await axios.delete(base_api + `/Product/${id}`).then((res)=>{
            console.log("res>>>>>>",res.data);
            dispatch(get_dataAsync());
        }).catch((err)=>{
            console.log("ewrr",err);
        })
    }
}

