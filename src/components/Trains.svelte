<script lang="ts">
	import type { Time } from "../types/trainDataTypes";
	import TimeAwayArrow from "./TimeAwayArrow.svelte";
	import moment from "moment";
	import Train from "./Train.svelte";
	import { trainTimes } from "../stores";

	$: times = !$trainTimes
		? []
		: $trainTimes?.groups
				.flatMap((g) => {
					return g.times;
				})
				.sort((a: Time, b: Time) => {
					let a_u = moment(a.arrivalFmt).unix();
					let b_u = moment(b.arrivalFmt).unix();
					return a_u - b_u;
				})
				.map((t) => {
					const direction: "left" | "right" =
						t.directionId === "1" ? "right" : "left";
					const distance = parseInt(
						moment(t.arrivalFmt).subtract(moment.now()).format("m")
					);
					return { ...t, direction, distance };
				});
	$: lastUpdated = $trainTimes?.lastUpdated.format("hh:mm:ss A");
</script>

{#if $trainTimes == null}
	<p class="meta-statment">loading...</p>
{:else}
	<p class="meta-statment">last updated: {lastUpdated}</p>
{/if}
<div class="trains-grid">
	{#each times as time}
		{#if time.direction === "right"}
			<div class="train-container">
				<div class="train-container__arrow-continuation">
					<Train
						direction="right"
						distance={time.distance}
						tripHeadsign={time.tripHeadsign}
					/>
				</div>
			</div>
		{/if}
		<TimeAwayArrow direction={time.direction} arrivalTime={time.arrivalFmt} />
		{#if time.direction === "left"}
			<div class="train-container">
				<div class="train-container__arrow-continuation">
					<Train
						direction="left"
						distance={time.distance}
						tripHeadsign={time.tripHeadsign}
					/>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	@import "src/styles/variables.scss";
	.trains-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 0.4rem;
		row-gap: 0.1rem;
		background-color: $tunnel-black;
		overflow: hidden;
	}

	.train-container {
		background-color: $tile-white;
		position: relative;
	}

	.train-container__arrow-continuation {
		background-color: $tunnel-black;
		height: $arrow-body-size;
		width: 100%;
		position: absolute;
		top: 25%;
	}

	.meta-statment {
		margin: 0;
		padding-bottom: 0.25rem;
		background-color: $tunnel-black;
		color: $tile-white;
		font-size: 0.8rem;
		text-align: left;
	}
</style>
