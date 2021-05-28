import axios from "axios"

export const productListAction = () => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_LIST_REQUEST' })
        const {data} = await axios.get('http://localhost:8000/api/products')
        dispatch({
            type: 'PRODUCT_LIST_SUCCESS',
            payload: data
        })

    } catch(err) {
        console.log(err)
    }
}


export const productDetailAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_Detail_REQUEST' })
        const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)
        dispatch({
            type: 'PRODUCT_Detail_SUCCESS',
            payload: data
        })

    } catch(err) {
        console.log(err)
    }
}