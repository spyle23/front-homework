import { CLASSIFICATION } from "./params";

interface IIcon {
  prefix: string;
  suffix: string;
}

interface ILocation {
  country: string;
  cross_street: string;
  formatted_address: string;
  address?: string;
  locality?: string
  postcode?: string;
  region?: string;
}

interface ICategory {
  name: string;
  id: number;
  icon: IIcon;
}

export interface IPlace {
  categories: ICategory[];
  chains: any[];
  distance: number;
  fsq_id: string;
  geocodes: any;
  link: string;
  location: ILocation;
  name: string;
  related_places: any;
  timezone: string;
}

export interface IPhoto {
  id: string;
  created_at: Date;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classification: CLASSIFICATION[];
}

export interface ITips {
  id: string;
  created_at: Date;
  text: string;
}
