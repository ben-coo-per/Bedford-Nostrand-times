<script lang="ts">
	import moment from "moment";

	export let direction: "right" | "left";
	export let arrivalTime: string;

	let timeStamp = moment(arrivalTime);
	let tMinsUntilArrival = timeStamp.fromNow();
</script>

<div class={"arrow arrow--" + direction}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="arrow-head"
		viewBox="0, 0, 100, 100"
	>
		<polygon
			points={direction === "left" ? "100,0 25,49 100,100" : "0,0 75,49 0,100"}
		/>
	</svg>
	<div class="time-details">
		<p>{tMinsUntilArrival}</p>
		<p class="time-details__arrival-time">{timeStamp.format("h:mm:ss A")}</p>
	</div>
</div>

<style lang="scss">
	@import "src/styles/variables.scss";

	.arrow {
		background-color: $tile-white;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 0.75rem 0;
	}

	.arrow--right {
		flex-direction: row-reverse;
	}

	.arrow--left {
		flex-direction: row;
	}

	.arrow-head {
		fill: $tunnel-black;
		height: $arrow-head-size;
		width: $arrow-head-size;
	}

	.time-details {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		padding: 0rem 0.5rem;
		height: $arrow-body-size;
		align-items: center;

		background-color: $tunnel-black;
		color: $floor-gray;
	}

	.time-details__arrival-time {
		padding: 0.25rem 0.5rem;
		background-color: $floor-gray;
		color: $tunnel-black;
		border-radius: 10000px;
	}
</style>
