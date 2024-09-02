<script>
	import { page } from '$app/stores';
	import SqlHabitLogo from '../app/SQLHabitLogo.svelte';
</script>

<!-- <a
	href="https://www.sqlhabit.com"
	target="_blank"
	rel="noreferrer"
	class="App__logo">
	<SqlHabitLogo />
</a> -->


	<!-- <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav> -->



<style>
	.App-header {
		height: 40px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
		padding: 0 1rem;
    }

    .App__logo {
		top: 16px;
		left: 16px;
		position: fixed;
		z-index: 50000;

		background: none;

		text-decoration: none;

		cursor: pointer;
    }

    .layout {
		position: fixed;
		width: 100%;
		height: 100%;
    }

    .layout__outlet {
		width: 100%;
		height: 100%;
    }

</style>
