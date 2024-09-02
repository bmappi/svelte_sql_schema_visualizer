import type { Edge } from "@xyflow/svelte";
import { moveSVGInFront } from "./moveSVGInFront";

export const setHighlightEdgeClassName = (edge: Edge) => {
  if(edge.class?.includes("has-many-edge-reversed")) {
    edge.class = "has-many-edge-reversed has-many-edge-reversed--highlighted";
    edge.markerEnd = "hasManyReversedHighlighted"

    // https://stackoverflow.com/questions/17786618/how-to-use-z-index-in-svg-elements
    const svg = document.querySelector(".svelte-flow__edges")?.querySelector(`[data-testid="rf__edge-${edge.id}"]`)
    moveSVGInFront(svg);
  } else if(edge.class?.includes("has-many-edge")) {
    edge.class = "has-many-edge has-many-edge--highlighted";
    edge.markerEnd = "hasManyHighlighted"

    const svg = document.querySelector(".svelte-flow__edges")?.querySelector(`[data-testid="rf__edge-${edge.id}"]`)
    moveSVGInFront(svg);
  } else if(edge.class?.includes("has-one-edge-reversed")) {
    edge.class = "has-one-edge-reversed has-one-edge-reversed--highlighted";
    edge.markerEnd = "hasOneReversedHighlighted"

    const svg = document.querySelector(".svelte-flow__edges")?.querySelector(`[data-testid="rf__edge-${edge.id}"]`)
    moveSVGInFront(svg);
  } else if(edge.class?.includes("has-one-edge")) {
    edge.class = "has-one-edge has-one-edge--highlighted";
    edge.markerEnd = "hasOneHighlighted"

    const svg = document.querySelector(".svelte-flow__edges")?.querySelector(`[data-testid="rf__edge-${edge.id}"]`)
    moveSVGInFront(svg);
  }
};
