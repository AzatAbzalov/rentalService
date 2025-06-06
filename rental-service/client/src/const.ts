import { CityOffer } from "./types/offer";

const Setting = {
    rentOffersCount: 312
} as const;

const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer',
} as const;

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN'
};

const CITIES_LOCATION : CityOffer[] = [
 {
   name: 'Paris',
   location: {
     latitude: 48.8534,
     longitude: 2.3488,
     zoom: 11
   }
 },
 {
   name: 'Cologne',
   location: {
     latitude: 50.9333,
     longitude: 6.95,
     zoom: 11
   }
 },
 {
   name: 'Brussels',
   location: {
     latitude: 50.85045,
     longitude: 4.34878,
     zoom: 11
   }
 },
 {
   name: 'Amsterdam',
   location: {
     latitude: 52.379189,
     longitude: 4.899431,
     zoom: 11
   }
 },
 {
   name: 'Hamburg',
   location: {
     latitude:  53.5753,
     longitude: 10.0153,
     zoom: 11
   }
 },
 {
   name: 'Dusseldorf',
   location: {
     latitude: 51.2217,
     longitude: 6.77616,
     zoom: 11
   }
 },
];

const SortOffersType = {
  Popular : 'Popular',
  PriceToHigh : 'Price: low to high',
  PriceToLow : 'Price: high to low',
  TopRated : 'Top rated first'
};

export { Setting, AppRoute, AuthorizationStatus, CITIES_LOCATION, SortOffersType };
