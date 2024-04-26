export interface IUser {
  id: number;
  username: string;
  typeAccount: number;
  INN?: string;
  nickname: string;
  phone: string;
  email: string;
  password: string;
  roleAuctioneer: number;
  dateCreated: string;
  dateUpdated: string;
}
