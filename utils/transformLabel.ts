export const transfromLabel = (label: string) => {
  switch (label) {
    case 'asset_field':
      return '字段';
    case 'code':
      return '代码';
    case 'table':
      return '表';
    case 'data':
      return '数据元';
    case 'model':
      return '模型';
    case 'department':
      return '部门';
    case 'asset':
      return '资产';
    case 'database':
      return '数据库';
    case 'termi':
      return '术语';
    case 'field':
      return '字段';
    case 'system':
      return '系统'
    case 'relateasset':
      return '相关资产'
    case 'rule':
      return '规则'
    case 'task':
      return '任务'
    default:
      return '未知';
  }
};