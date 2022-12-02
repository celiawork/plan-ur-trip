import { NativeGeocoderResult } from "@awesome-cordova-plugins/native-geocoder/ngx";

export interface Travel {
	id: string;
	name: string;
	details?: DetailTravel[];
}

export interface DetailTravel {
	category?: string;
	city?: string;
	departure?: string;
	timedeparture?:string;
	arrival?:string;
	traveltime?:string;
	date?: Date;
	transport?: string;
	coordinates?: NativeGeocoderResult;
} 