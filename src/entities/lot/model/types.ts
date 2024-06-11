import { Currency } from "shared/ui/currency-manager";

interface IBid {
  userId: number;
  rate: number;
  date: string;
}

export interface ILot {
  id_lot: string;
  title: string;
  object_auction: string;
  image_preview: string;
  files: string[];
  images: string[];
  isOpen: boolean;
  case_number: number
  default_rate: number;
  currancy: Currency;
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
  car_brand: string;
  car_type: string;
  car_model: string;
  car_body: string;
  car_color: string;
  car_damage: string;
  car_generation: string; // поколение
  passport_pts: string;
  type_drive: string;
  type_transmission: string;
  region: string;
  city: string;
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
