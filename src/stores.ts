import moment, { Moment } from "moment";
import { Readable, readable } from "svelte/store";
import type { DirectionGroup } from "./types/trainDataTypes";

type TrainTimesType = {
	groups: DirectionGroup[];
	lastUpdated: Moment;
};

export const trainTimes: Readable<TrainTimesType> = readable(
	null,
	function start(set) {
		async function fetchMTAData() {
			const res = await fetch(
				"https://otp-mta-prod.camsys-apps.com/otp/routers/default/nearby?stops=MTASBWY%3AA44&apikey=Z276E3rCeTzOQEoBPPN4JCEc6GfvdnYE"
			);
			const data = JSON.parse(await res.text());

			if (res.ok) {
				return data[0].groups;
			} else {
				throw new Error(data);
			}
		}

		const interval = setInterval(async function () {
			const res = await fetchMTAData();
			set({ groups: res, lastUpdated: moment() });
		}, 2500);

		return function stop() {
			clearInterval(interval);
		};
	}
);
