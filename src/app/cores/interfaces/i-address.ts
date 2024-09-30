import { IGeo } from "./i-geo";

export interface IAddress {
    street: string;
    suite?: string; // optional
    city: string;
    zipcode?: string; // optional
    geo?: IGeo; // optional
}

export interface IAddressChild extends IAddress {
    zip: string;
}