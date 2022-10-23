export interface Time {
	arrivalFmt: string;
	tripHeadsign: string;
	directionId: string;
	realTimeArrival: number;
}

export interface DirectionGroup {
	headsign: string;
	route: {
		longName: string;
		shortName: string;
		color: string;
	};
	times: Time[];
}
