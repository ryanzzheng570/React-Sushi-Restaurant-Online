import {
    modifyCheckoutSushi,
    removeCheckoutSushi
} from "./utils/reducerFunctions";

const CHECKOUT_ADD_SUSHI = "CHECKOUT_ADD_SUSHI";
const CHECKOUT_MODIFY_SUSHI = "CHECKOUT_MODIFY_SUSHI";
const CHECKOUT_REMOVE_SUSHI = "CHEKCOUT_REMOVE_SUSHI";

export const checkoutAddSushi = (sushi) => {
    return {
        type: CHECKOUT_ADD_SUSHI,
        sushi
    };
};

export const checkoutModifySushi = (checkoutItemId, quantity) => {
    return {
        type: CHECKOUT_MODIFY_SUSHI,
        payload: {
            checkoutItemId,
            quantity
        }
    }
}

export const checkoutRemoveSushi = (checkoutItemId) => {
    return {
        type: CHECKOUT_REMOVE_SUSHI,
        payload: {
            checkoutItemId
        }
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case CHECKOUT_ADD_SUSHI: {
            return [...state, action.sushi];
        }
        case CHECKOUT_MODIFY_SUSHI: {
            return modifyCheckoutSushi(
                state,
                action.payload.checkoutItemId,
                action.payload.quantity
            );
        }
        case CHECKOUT_REMOVE_SUSHI: {
            return removeCheckoutSushi(state);
        }
        default: {
            return state;
        }

    }
}

export default reducer