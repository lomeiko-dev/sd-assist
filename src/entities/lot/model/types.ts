export interface ILot {
  id: number;
  id_lot: string;
  isOpen: boolean;
  image_preview: string;
  images: string[];
  title: string;
  default_rate: number;
  country: string;
  mileage: number;
  KPP: string;
  engine: string;
  date: string;
  seller: string;
  deadline_date: string;
  deadline_time: string;
  release_year: number;
  type_insurance: string;
  VIN_number: number;
  car_brand: string;
  car_type: string;
  model: string;
  generation: string; // поколение
  region: string;
}
