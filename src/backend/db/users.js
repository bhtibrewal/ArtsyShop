import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    addresses:[],
    password: bcyrpt.hashSync("johnDoe123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    email: "guestUser@gmail.com",
    addresses: [{_id: uuid(), street: "Nagar", city: "jaipur", country: "Rajasthan", zip_code: 302019, }],
    password: bcyrpt.hashSync("guestUser123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
