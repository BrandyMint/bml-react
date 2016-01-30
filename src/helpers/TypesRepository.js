import typeComponents from 'constants/typeComponents';

const TypesRepository = {
  // Возвращает компонент с нужным именем
  get(type) {
    // TODO fail when no component found
    return typeComponents[type];
  },

  getContentSchema(type) {
    return this.get(type).contentSchema;
  },
};

export default TypesRepository;
