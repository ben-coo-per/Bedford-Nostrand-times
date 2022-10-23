<script lang="ts">
	import { onMount } from "svelte";
	import Trains from "./components/Trains.svelte";
	import type { DirectionGroup } from "./types/trainDataTypes";
	let promise;
	let groups: DirectionGroup[] = [];

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

	onMount(async () => {
		promise = fetchMTAData();
	});
</script>

<main>
	<div>
		{#await promise}
			<p>loading...</p>
		{:then groups}
			<Trains {groups} />
		{/await}
	</div>
</main>

<style lang="scss" global>
	@import "src/styles/variables.scss";

	body {
		background-color: $floor-gray;
	}

	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
		border: 0.25rem solid $tunnel-black;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
