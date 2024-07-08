import { ILot } from "entities/lot";

export interface IRejectedLot {
    lot: ILot
    message: string
}