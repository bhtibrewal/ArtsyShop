import axios from "axios";

export const deleteAddress = async ({ addressId, userDataDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/address/${addressId}`);
        if (res.status === 200) {
            userDataDispatch({ type: "HANDLE_ADDRESSES", payload: res.data.addresses });
            showToast({ title: 'address deleted', type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}