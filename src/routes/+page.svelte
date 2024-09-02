<script>
	import { onMount } from 'svelte';

	import App from "../app/App.svelte";
	import databases from "../config/databases.json";
	import Visualizer from '../Visualizer/Visualizer.svelte';

	let databaseName = '';
	let slug = '';

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		slug = params.get('slug') || '';

		const databaseNames = Object.keys(databases);
		databaseName = slug || databaseNames[0];
	});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<Visualizer database={databaseName} />

<!-- <Database /> -->




<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	
</style>
