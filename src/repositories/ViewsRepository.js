import size from 'lodash/size';
import findIndex from 'lodash/findIndex';
import { views, types } from 'views/all';
import invariant from 'invariant';

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
    const compatibleViews = this.getCompatibleViews(viewName);
    const viewsCount = size(compatibleViews);
    if (viewsCount > 1) {
      const viewIndex = findIndex(compatibleViews, { viewName });
      invariant(viewIndex >= 0, `No index for view ${viewName}`);
      const prevViewIndex = viewIndex > 0 ? viewIndex - 1 : viewsCount;
      const prevView = compatibleViews[prevViewIndex];

      return prevView;
    }

    return void(0);
  }

  getNextView(viewName) {
    const compatibleViews = this.getCompatibleViews(viewName);
    const viewsCount = size(compatibleViews);
    if (viewsCount > 1) {
      const viewIndex = findIndex(compatibleViews, { viewName });
      invariant(viewIndex >= 0, `No index for view ${viewName}`);
      const nextViewIndex = viewIndex + 1 !== viewsCount ? viewIndex + 1 : 0;
      const nextView = compatibleViews[nextViewIndex];

      return nextView;
    }

    return void(0);
  }

  getBlandView(viewName) {
    return views[viewName];
  }

  getView(viewName) {
    const view = this.getBlandView(viewName);

    invariant(view, `No view ${viewName} is registered`);
    return view;
  }
}

export const viewsRepository = new ViewsRepository();
