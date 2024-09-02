<script lang="ts">
  import { onMount } from 'svelte';
  import SQLHabitLogo from './SQLHabitLogo.svelte';
  import databases from '../config/databases.json';

  let databaseName = '';
  let slug = '';

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    slug = params.get('slug') || '';
    const databaseNames = Object.keys(databases);
    databaseName = slug || databaseNames[0];
  });

</script>

<div class="App">
    <a
      href="https://www.sqlhabit.com"
      target="_blank"
      rel="noreferrer"
      class="logo">
      <SQLHabitLogo />
    </a>
  
    <!-- <Router>
      <Route path="/" component={Database} />
      <Route path="databases/:slug" component={Database} />
      <Route path="*" component={NoMatch} />
    </Router> -->
</div>

<style>
    .App {
    height: 100%;
    display: flex;
    flex-direction: column;
    }

    .logo {
        top: 16px;
        left: 16px;
        position: fixed;
        z-index: 50000;

        background: none;

        text-decoration: none;

        cursor: pointer;
    }

</style>