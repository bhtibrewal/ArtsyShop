import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from 'uuid';


/**
 * This handler handles adding items to user's address.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addNewAddressHandler = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: ["The email you entered is not Registered. Not Found error"],
                }
            );
        }
        const userAddresses = schema.users.findBy({ _id: userId }).addresses;
        const { address } = JSON.parse(request.requestBody);
        userAddresses.push({
            ...address, _id: uuid()
        });
        this.db.users.update({ _id: userId }, { addresses: userAddresses });
        return new Response(201, {}, { addresses: userAddresses });
    }
    catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
}

/**
 * This handler handles removing items to user's address.
 * send DELETE Request at /api/user/address/:addressId
 * */

export const deleteAddressHandler = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: ["The email you entered is not Registered. Not Found error"],
                }
            );
        }
        let userAddresses = schema.users.findBy({ _id: userId }).addresses;
        const { addressId } = request.params;
        userAddresses = userAddresses.filter((item) => item._id !== addressId);
        this.db.users.update({ _id: userId }, { addresses: userAddresses });
        return new Response(200, {}, { addresses: userAddresses });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};