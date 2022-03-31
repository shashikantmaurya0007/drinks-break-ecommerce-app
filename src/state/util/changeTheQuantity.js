import axios from "axios";
import { CART_ACTION } from "../action";
const changeTheQuantity = async(cartDispatch, productId, quantityAction) => {
    console.log(cartDispatch, productId, quantityAction);
    const {
        data: { cart },
    } = await axios.post(
        `/api/user/cart/${productId}`, { action: { type: quantityAction } }, {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        }
    );

    if (quantityAction === "increment") {
        cartDispatch({ type: CART_ACTION.INCREASE_QUANTITY, payload: cart });
    } else {
        cartDispatch({ type: CART_ACTION.DECREASE_QUANTITY, payload: cart });
    }
};

export { changeTheQuantity };