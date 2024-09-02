import type { Edge } from "@xyflow/svelte";

export const setEdgeClassName = (edge: Edge) => {
  if(edge.class?.includes("has-many-edge-reversed")) {
    edge.class = "has-many-edge-reversed";
    edge.markerEnd = "hasManyReversed"
  } else if(edge.class?.includes("has-many-edge")) {
    edge.class = "has-many-edge";
    edge.markerEnd = "hasMany"
  } else if(edge.class?.includes("has-one-edge-reversed")) {
    edge.class = "has-one-edge-reversed";
    edge.markerEnd = "hasOneReversed"
  } else if(edge.class?.includes("has-one-edge")) {
    edge.class = "has-one-edge";
    edge.markerEnd = "hasOne"
  }

  return edge;
};
