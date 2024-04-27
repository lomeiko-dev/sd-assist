import { IUser } from "entities/user";

export interface IRegistrationScheme extends Omit<IUser, "id"> {}
