import size from 'lodash/size';
import findIndex from 'lodash/findIndex';

export default class ViewsRepository {
  views = {};
  types = {};

  getContentSchemaByViewName(viewName) {
    return this.getView(viewName).contentSchema;
  }

  getCompatibleViews(viewName) {
    const view = this.getView(viewName);
    return this.types[view.typeName] || [];
  }

  getPrevView(viewName) {
    const views = this.getCompatibleViews(viewName);
    const viewsCount = size(views);
    if (viewsCount > 1) {
      const viewIndex = findIndex(views, { name: viewName });
      const prevViewIndex = viewIndex > 0 ? viewIndex - 1 : viewsCount;
      const prevView = views[prevViewIndex];

      return prevView;
    }
  }

  getNextView(viewName) {
    const views = this.getCompatibleViews(viewName);
    const viewsCount = size(views);
    if (viewsCount > 1) {
      const viewIndex = findIndex(views, { name: viewName });
      const nextViewIndex = viewIndex + 1 !== viewsCount ? viewIndex + 1 : 0;
      const nextView = views[nextViewIndex];

      return nextView;
    }
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
    if (this.views[view.viewName]) {
      const error = new Error(`View ${view.viewName} is already registered`);
      throw error;
    }
    this.views[view.viewName] = view;

    const typeName = view.typeName;
    if (!this.types[typeName]) {
      this.types[typeName] = [];
    }
    this.types[typeName].push(view);
  }
}
