import axios from "axios";

export const updateAddress = async ({ addressId, userDataDispatch, address, showToast }) => {
    try {
        const res = await axios.post(`/api/user/address/${addressId}`, { address });
        if (res.status === 200) {
            userDataDispatch({ type: "HANDLE_ADDRESSES", payload: res.data.addresses });
            showToast({ title: 'address updated', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}