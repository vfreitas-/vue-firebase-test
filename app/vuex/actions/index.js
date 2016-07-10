import * as types from '../mutation-types';

export const vuexInitialize = ({dispatch, state}) => {
    // let app = window.DigitalDrift || {};
    //
    // dispatch(types.CART_UPDATE, app.cart);
    // dispatch(types.APP_CONFIG, app.settings);
    //
    // if (typeof app.product !== 'undefined' && app.product) {
    //     dispatch(types.PRODUCT_CONFIG, app.product);
    // }
};

export const modalUnavaliableProductShow = ({dispatch, state}, product) => {
    dispatch(types.UNAVALIABLE_SHOW, product);
};

export const modalUnavaliableProductHide = ({dispatch, state}) => {
    dispatch(types.UNAVALIABLE_HIDE);
};


// export const appConfig = ({dispatch, state}) => {
//     let config = window.DigitalDrift || {};
//     dispatch(types.UPDATE_CART, config.cart)
//     dispatch(types.APP_CONFIG, config);
// }
//
// export const cartLoad = ({ dispatch }) => {
//     dispatch(types.CART_LOAD);
// }
//
// export const addToCart = ({dispatch}, sku) => {
//     CartService.addProduct(sku).then( response => {
//         dispatch(types.UPDATE_CART, response.data);
//     });
// }

// Para fazer manualmente você cria um warehouse, cria uma location, clica na palavra “​_free_​” que aparece na location.
// Daí, no pop-up, você escolhe um produto e sua quantidade.
