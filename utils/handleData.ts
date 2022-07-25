import fakeData from '../fake_data.json'
import { Edge, Node } from '../type';

const formatData = (data: { entities: Node[]; edges: Edge[] }) => {
  const assets: Node[] = [];
  const models: Node[] = [];
  const other: Node[] = [];
  const property: Node[] = [];
  const datametas: Node[] = [];
  const codes: Node[] = [];
  const terms: Node[] = [];
  const fields: Node[] = [];
  const rules: Node[] = [];
  data.entities.forEach((item: Node) => {
    if (item.label === 'model') {
      models.push(item);
    } else if (item.label === 'asset') {
      assets.push(item);
    } else if (item.label === 'property') {
      property.push(item);
    } else if (item.label === 'datameta') {
      datametas.push(item);
    } else if (item.label === 'codeinfo') {
      codes.push(item);
    } else if (item.label === 'terminology') {
      terms.push(item);
    } else if (item.label === 'assetfield') {
      fields.push(item);
    } else {
      other.push(item);
    }
  });
  const edges = [
    ...data.edges,
    // { fromId: centerPoint[0].id, toId: 'rule', name: '' },
    // { fromId: centerPoint[0].id, toId: 'task', name: '' },
    // { fromId: centerPoint[0].id, toId: 'relateasset', name: '' },
    // { fromId: centerPoint[0].id, toId: 'system', name: '' },
    // { fromId: 'rule1', toId: 'rule11', name: '' },
    // { fromId: 'rule1', toId: 'rule12', name: '' },
    // { fromId: 'rule1', toId: 'rule13', name: '' },
    // { fromId: assetField[0].id, toId: 'rule11', name: '' },
    // { fromId: assetField[0].id, toId: 'rule12', name: '' },
    // { fromId: assetField[0].id, toId: 'rule13', name: '' },
    // { fromId: terminology[0].id, toId: centerPoint[0].id, name: '' },
    // { fromId: rule1[0].id, toId: centerPoint[0].id, name: '' }
  ]

  // 处理model
  const ids = Array.from(new Set(models.map((item) => item.id)));
  const props = ids.map((id) => {
    const edge = edges.filter((item) => item.fromId === id);
    const prop = edge.map((item) => {
      return property.find((thing) => thing.id === item.toId);
    });
    return prop;
  });

  return {
    assets,
    models,
    props,
    other,
    terms,
    datametas,
    codes,
    rules,
    fields,
    edges,
  };
};

export const getData = async (id: number) => {
  return formatData(fakeData.data)
};
