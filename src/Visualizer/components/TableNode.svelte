<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import { markdown } from '../helpers/markdown';
	import KeyIcon from './KeyIcon.svelte';
	import { onMount } from 'svelte';

	type $$Props = NodeProps;

	export let data: NodeProps['data'] | any;
	let selectedColumn = '';
	let showDescription = false;
	let descriptionOnHoverActive = false;

	export let positionAbsolute: XYPosition = { x: 0, y: 0 };

	onMount(() => {});
</script>

<div class="table">
	<div
		style="background-color: {data.schemaColor}"
		class="table__name"
		role="table"
		on:mouseenter={() => {
			if (descriptionOnHoverActive) {
				showDescription = true;
			}
		}}
		on:mouseleave={() => (showDescription = false)}
	>
		{data.schema ? `${data.schema}.${data.name}` : data.name}

		<div class:table__description={true} class:table__description--active={showDescription}>
			{@html markdown(data?.description || 'No description.')}
		</div>
	</div>

	<div class="table__columns">
		{#each data.columns as column, index (index)}
			<div
				class:column-name={true}
				class:column-name--selected={selectedColumn === column.name}
				role="table"
				on:mouseenter={() => {
					if (descriptionOnHoverActive) {
						selectedColumn = column.name;
					}
				}}
				on:mouseleave={() => (selectedColumn = '')}
			>
				{#if column.handleType}
					<Handle
						type={column.handleType}
						position={Position.Right}
						id={`${column.name}-right`}
						class={'right-handle' +
							(column.handleType === 'source' ? ' source-handle' : '') +
							(column.handleType === 'target' ? ' target-handle'  : '')}
					/>
					<Handle
						type={column.handleType}
						position={Position.Left}
						id={`${column.name}-left`}
						class={'left-handle' +
							(column.handleType === 'source' && ' source-handle') +
							(column.handleType === 'target' && ' target-handle')}
					/>
				{/if}

				<div class="column-name__inner">
					<div class="column-name__name">
						{#if column.key}
							<KeyIcon />
						{/if}
						{column.name}
					</div>
					<div class="column-name__type">
						{column.type}
					</div>

					<div class="column-name__description">
						{@html markdown(column.description || 'No description.')}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@import '../style/table.css';
	@import '../style/svelte-flow.css';
	@import '../style/column-name.css';
	@import '../style/handle.css';

	.custom {
		padding: 10px;
		background: white;
		border: 1px solid #555;
	}
</style>
