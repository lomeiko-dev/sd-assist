import { Currency } from "shared/ui/currency-manager";
import { IColorItem } from "shared/ui/input/model/types";

export interface IBid {
  userId: number;
  rate: number;
  date: string;
}

export interface ILot {
  id?: number;
  id_lot: string;
  title: string;
  object_auction: string;
  files: string[];
  images: string[];
  isOpen: boolean;
  case_number: number;
  default_rate: number;
  currency: Currency;
  bids: IBid[];
  mileage: number;
  type_engine: string;
  volume_engine: number;
  power_engine: number;
  engine_damage: string;
  KPP_damage: string;
  date_create: string;
  seller: string;
  date_start: string;
  date_deadline: string;
  release_year: number;
  type_insurance: string;
  VIN_number: number;
  frame_number: number;
  car_brand: any;
  car_type: string;
  car_model: any;
  car_body: string;
  car_color: IColorItem;
  car_damage: string;
  car_generation: any; // поколение
  passport_pts: string;
  type_drive: string;
  type_transmission: string;
  region: any;
  city: any;
  offer_period: number;
  isNotFreeField: boolean;
  isMarkTermitionRegistrationCar: boolean;
  isMarkMVD: boolean;
  isWithdrawalAccountingGBDD: boolean;
  isHidingMechanicDamage: boolean;
  isFullEquipment: boolean;
  isGOTSParkingLotSK: boolean;
  comment: string;
}

export enum enumSwitcherDetails {
  DESCRIPTION = "DESCRIPTION",
  TECHNICAL_CONDITION = "TECHNICAL_CONDITION",
  COMMENT = "COMMENT",
  DOCUMENTS = "DOCUMENTS",
  ADDITIONAl_BIDDINGS = "ADDITIONAl_BIDDINGS",
}
