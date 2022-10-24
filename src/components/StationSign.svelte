<script>
	import GTrainSign from "../svgs/GTrainSign.svelte";
</script>

<div class="sign">
	<div class="sign--container">
		<h2>Bedford- Nostrand Avenues Station</h2>
		<div>
			<GTrainSign size={60} />
		</div>
	</div>
</div>

<style lang="scss">
	@import "src/styles/variables.scss";

	.sign {
		max-width: 20rem;
		height: 4rem;
		border-top: 0.25rem solid $tunnel-black;
		border-bottom: 0.25rem solid $tunnel-black;
		background-color: $tunnel-black;
		margin: 0 auto 1rem auto;
	}

	.sign--container {
		display: flex;
		border-top: 0.2rem solid white;
	}

	h2 {
		margin: 0.2rem;
		line-height: 0.98;
		color: white;
		font-size: 1.75rem;
	}
</style>
