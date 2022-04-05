import axios from "axios";

export const addNewAddress = async ({ userDataDispatch, address, showToast }) => {
    try {
        const res = await axios.post("/api/user/address", { address });
        if (res.status === 201) {
            userDataDispatch({ type: "HANDLE_ADDRESSES", payload: res.data.addresses });
            showToast({ title: 'address saved', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}