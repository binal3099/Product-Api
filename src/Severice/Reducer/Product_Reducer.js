const initialstate = {
    Products : [],
    loading : false,
    product : null
}

const product_reducer = (state = initialstate, action)=>{

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
                Products: action.payload
            }
        default:
            return state;
    }
}

export default product_reducer;