<script lang="ts">
	import StationSign from "./components/StationSign.svelte";
	import Trains from "./components/Trains.svelte";
</script>

<StationSign />
<main>
	<div>
		<Trains />
		<!-- {#await promise}
			{#if cachedGroups}
				<Trains groups={cachedGroups} />
			{/if}
			<p>loading...</p>
		{:then groups}
			<Trains {groups} />
		{/await} -->
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
