<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { get, writable } from 'svelte/store';

    import './style/svelte-flow.css'
    import './style/flow.css';
    import './style/svelte-flow.css';
    import "./style/table.css";
    import "./style/column-name.css";
    import "./style/info-popup.css";
    import "./style/has-one-edge.css";
    import "./style/has-many-edge.css";
    import "./style/key-icon.css";
    import "./style/handle.css";
    
    import {
      SvelteFlow,
      SvelteFlowProvider,
      Controls,
      ControlButton,
      Background,
      MiniMap,
      getConnectedEdges,
      getIncomers,
      getOutgoers,
      useNodes,
      useEdges,

	  type Edge

    } from '@xyflow/svelte';
  
    import '@xyflow/svelte/dist/style.css';
	import Marker from './components/Marker.svelte';
	import MaximizeIcon from './components/MaximizeIcon.svelte';
	import MinimizeIcon from './components/MinimizeIcon.svelte';
	import InfoIcon from './components/InfoIcon.svelte';
	import DatabaseIcon from './components/DatabaseIcon.svelte';
	import InfoPopup from './components/InfoPopup.svelte';
	import { calculateEdges, initializeNodes, loadDatabases } from './helpers';
	import type { DatabaseConfig } from './types';
	import TableNode from './components/TableNode.svelte';

    export let database: any = {};

    export const currentDatabase = writable<DatabaseConfig>({
        tables: [],
        edgeConfigs: [],
        schemaColors: {},
        tablePositions: {}
    });

    export const databasesLoaded = writable(false);

    let fullscreenOn = false;
    let infoPopupOn = false;
    let unknownDatasetOn = false;
    let databaseMenuPopupOn = false;
    let nodeHoverActive = true;

    onMount(async () => {
        const data = await loadDatabases();
        if(!database || !(database in data)) {
            console.error("database not in schema ", database, data);
            return;
        }

        const databaseConfig = data[database as string] as DatabaseConfig;
        $currentDatabase = databaseConfig;
        $databasesLoaded = true;
    //   setCurrentDatabase(databaseConfig);
    //   setDatabasesLoaded(true);

        const initialNodes = initializeNodes($currentDatabase);
        console.log("initialNodes", initialNodes)
        nodes.set(initialNodes);

        const initialEdges = calculateEdges({
            nodes: get(nodes),
            currentDatabase: get(currentDatabase)
        });

        $edges = initialEdges;

        console.log("database: ", database);
        console.log("data: ", data);

    })

    const nodes = writable<any>([]);

  const edges = writable([
  ]);

  const nodeTypes = {
    table: TableNode
  }

  const oninit = () => {}
  const onNodeMouseEnter = () => {}
  const onNodeMouseLeave = () => {}
  const toggleFullScreen = () => {}

</script>

<div class="Flow">
        <Marker />
        <SvelteFlow
            {nodes}
            {edges}

            fitView
            proOptions={ {
                hideAttribution: true
            }}
            {oninit}
            snapGrid={[16, 16]}
            {nodeTypes}
            on:nodemouseenter={onNodeMouseEnter}
            on:nodemouseleave={onNodeMouseLeave}
        >
        <Controls>
            <ControlButton on:click={toggleFullScreen}>
                {#if fullscreenOn}
                    <MaximizeIcon />
                {:else}
                    <MinimizeIcon />
                {/if}
            </ControlButton>
            <ControlButton>
                <InfoIcon />
            </ControlButton>
            <ControlButton>
                <DatabaseIcon />
            </ControlButton>
        </Controls>
        <Background bgColor="#fff" gap={16} />
        <MiniMap />
        </SvelteFlow>
        {#if infoPopupOn}
            <InfoPopup on:close={() => { infoPopupOn = false}} />
        {/if}
</div>

<style global>
    @import './style/flow.css';
    @import './style/svelte-flow.css';
    @import "./style/table.css";
    @import "./style/column-name.css";
    @import "./style/info-popup.css";
    @import "./style/has-one-edge.css";
    @import "./style/has-many-edge.css";
    @import "./style/key-icon.css";
    @import "./style/handle.css";
</style>