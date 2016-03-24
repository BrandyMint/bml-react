import uuid from 'uuid';
import { viewsList } from 'views/all';
import { map, keys, flatten, compact } from 'lodash';

export const FULL_VIEWS_EXAMPLES_UUID = 'fullViewsExamples';

const mapSections = (viewName, sections) =>
  map(
    sections,
    (section) => ({ ...section, viewName, uuid: uuid.v4() })
  );

export const FULL_VIEWS_EXAMPLES_SECTIONS = flatten(
  compact(
    map(
      keys(viewsList),
      (viewName) =>
        mapSections(
          viewName,
          require(`views/${viewName}/examples.js`).sections
        )
    )
  )
);
