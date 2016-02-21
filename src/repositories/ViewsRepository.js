import size from 'lodash/size';
import findIndex from 'lodash/findIndex';
import { views, types } from 'views/all';

export default class ViewsRepository {
  views = {};

  getContentSchemaByViewName(viewName) {
    return this.getView(viewName).contentSchema;
  }

  getCompatibleViews(viewName) {
    const view = this.getView(viewName);
    return types[view.typeName] || [];
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
    debugger
    if (viewsCount > 1) {
      const viewIndex = findIndex(views, { name: viewName });
      const nextViewIndex = viewIndex + 1 !== viewsCount ? viewIndex + 1 : 0;
      const nextView = views[nextViewIndex];

      return nextView;
    }
  }

  getView(viewName) {
    const view = views[viewName];

    if (!view) {
      const error = new Error(`No view ${viewName} is registered`);
      throw error;
    }
    return view;
  }
}

export const viewsRepository = new ViewsRepository();
