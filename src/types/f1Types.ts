import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type DriverProps = {
  position: number;
  first_name: string;
  last_name: string;
  driver_number: string | StaticImport;
  driver_image: string | StaticImport;
  country_flag: string | StaticImport;
  team: string;
  points: string;
};

export type StandingDriverProps = {
  position: string;
  name: string;
  country: string;
  team: string;
  points: string;
};

type TeamDriverProps = {
  first_name: string;
  last_name: string;
  driver_image: string | StaticImport;
};

export type ConstructorProps = {
  name: string;
  team_logo: string | StaticImport;
  team_drivers: TeamDriverProps[];
  car_image: string | StaticImport;
};

export type StandingConstructorProps = {
  name: string;
  position: number;
  team_logo: string | StaticImport;
  points: string;
  car_image: string | StaticImport;
};
