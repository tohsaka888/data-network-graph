export type Node = {
  id: string | null;
  name: string;
  label: string;
  description: string | null;
}

export type Edge = {
  fromId: string;
  toId: string;
  name: string | null;
}

export type GraphNodes = {
  assets: Node[];
  models: Node[];
  props: (Node | undefined)[][];
  other: Node[];
  terms: Node[];
  datametas: Node[];
  codes: Node[];
  rules: Node[];
  fields: Node[];
}

export type GraphData = {
  nodes: GraphNodes;
  edges: Edge[];
}