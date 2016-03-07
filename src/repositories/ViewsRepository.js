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
    const views = this.getCompatibleViews(viewName);
    const viewsCount = size(views);
    if (viewsCount > 1) {
      const viewIndex = findIndex(views, { viewName });
      invariant(viewIndex >= 0, `No index for view ${viewName}`);
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
      invariant(viewIndex >= 0, `No index for view ${viewName}`);
      const nextViewIndex = viewIndex + 1 !== viewsCount ? viewIndex + 1 : 0;
      const nextView = views[nextViewIndex];

      return nextView;
    }
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
