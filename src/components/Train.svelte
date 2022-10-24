<script lang="ts">
	import GTrainSign from "../svgs/GTrainSign.svelte";
	import TrainCar from "../svgs/TrainCar.svelte";
	export let direction: "left" | "right";
	export let distance: number;
	export let tripHeadsign: string;
	$: percentage_distance = (distance / 30) * 100;
</script>

<div
	class={"train train--" + direction}
	style={direction + ":" + percentage_distance + "%;"}
>
	<div class={"train--first_container train--first_container--" + direction}>
		<div class="train--label"><GTrainSign /> {tripHeadsign}</div>
		<TrainCar />
	</div>
	<TrainCar />
	<TrainCar />
</div>

<style lang="scss">
	@import "src/styles/variables.scss";

	.train {
		position: absolute;
		display: flex;
		align-items: flex-end;
		bottom: 20%;
	}

	.train--right {
		flex-direction: row-reverse;
	}
	.train--left {
		flex-direction: row;
	}

	.train--first_container {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.train--first_container--left {
		align-items: flex-start;
	}

	.train--first_container--right {
		align-items: flex-end;
	}

	.train--label {
		border: 1px solid #908f8b;
		border-radius: 0.25rem;
		background-color: #30394a;
		color: $tile-white;
		padding: 0.25rem;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		margin: 0 0.5rem;
	}
</style>
