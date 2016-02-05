export default class ViewsRepository {
  views = {};
  types = {};

  getContentSchemaByViewName(viewName) {
    return this.getView(viewName).contentSchema;
  }

  getCompatibleViews(viewName) {
    return this.types[this.getView(viewName).typeName] || []
  }

  getView(viewName) {
    const view = this.views[viewName];

    if (!view) {
      const error = new Error(`No view ${viewName} is not registered`);
      throw error;
    }
    return view;
  }

  registerView(view) {
    if (this.views[view.name]) {
      const error = new Error `View ${view.name} is already registered`;
      throw error;
    }
    this.views[view.name] = view;

    const typeName = view.typeName;
    if (!this.types[typeName]) {
      this.types[typeName] = {};
    }
    this.types[typeName][view.name] = view;
  }
}
