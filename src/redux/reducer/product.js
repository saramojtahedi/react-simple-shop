

export const productListReducer = (state= {products: []} , actoin) => {
    switch (actoin.type) {
        case 'PRODUCT_LIST_REQUEST':
            return { loading: true, product: [] }
        case 'PRODUCT_LIST_SUCCESS': 
            return { loading: false, products: actoin.payload }
        default :
            return state;
    }
}

export const productDetailReducer = (state= { product: {} } , actoin) => {
    switch (actoin.type) {
        case 'PRODUCT_Detail_REQUEST':
            return { loading: true, ...state}
        case 'PRODUCT_Detail_SUCCESS': 
            return { loading: false, product: actoin.payload }
        default :
            return state;
    }
}