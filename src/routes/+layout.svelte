<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="App">
	<Header />

	<!-- <Router>
      <Route path="/" component={Database} />
      <Route path="databases/:slug" component={Database} />
      <Route path="*" component={NoMatch} />
    </Router> -->

	<slot />

</div>


<style>
    .App {
    height: 100%;
    display: flex;
    flex-direction: column;
    }
</style>