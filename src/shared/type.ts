import type { JSX } from "react";

export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OurPrograms = "ourprograms",
    ContactUs = "contact us"
 }

 export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}