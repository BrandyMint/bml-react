import size from 'lodash/size';
import findIndex from 'lodash/findIndex';
import { views, types } from 'views/all';

export default class ViewsRepository {
  views = {};

  getContentSchemaByViewName(viewName) {
    return this.getView(viewName).contentSchema;
  }

  getCompatibleViews(viewName) {
    const view = this.getBlandView(viewName);
    if (view) {
      return types[view.typeName] || [];
    }
    return [];
  }

  getPrevView(viewName) {
    const views = this.getCompatibleViews(viewName);
    const viewsCount = size(views);
    if (viewsCount > 1) {
      const viewIndex = findIndex(views, { viewName });
      if (viewIndex < 0) {
        const error = new Error(`No index for view ${viewName}`);
        throw error;
      }
      const prevViewIndex = viewIndex > 0 ? viewIndex - 1 : viewsCount;
      const prevView = views[prevViewIndex];

      return prevView;
    }
  }

  getNextView(viewName) {
    const views = this.getCompatibleViews(viewName);
    const viewsCount = size(views);
    if (viewsCount > 1) {
      const viewIndex = findIndex(views, { viewName });
      if (viewIndex < 0) {
        const error = new Error(`No index for view ${viewName}`);
        throw error;
      }
      const nextViewIndex = viewIndex + 1 !== viewsCount ? viewIndex + 1 : 0;
      const nextView = views[nextViewIndex];

      return nextView;
    }
  }

  getBlandView(viewName) {
    return views[viewName];

    if (!view) {
      const error = new Error(`No view ${viewName} is registered`);
      throw error;
    }
    return view;
  }
  getView(viewName) {
    const view = this.getBlandView(viewName);

    if (!view) {
      const error = new Error(`No view ${viewName} is registered`);
      throw error;
    }
    return view;
  }
}

export const viewsRepository = new ViewsRepository();
