import type { JSX } from "react";

export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    ContactUs = "contactus"
 }

 export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}