const initialstate = {
    Products : [],
    loading : false,
    product : null
}

const product_reducer = (state = initialstate, action)=>{

    console.log("action",action);

    switch (action.type) {
        case "Loading":
            return{
                ...state,
                loading : true
            }

        case "AllData":
            return{
                ...state,
                loading: false,
                Products: action.payload,
                product: null
            }

        case "Single_product":
            return{
                ...state,
                loading: false,
                product: action.payload
            }
        default:
            return state;
    }
}

export default product_reducer;