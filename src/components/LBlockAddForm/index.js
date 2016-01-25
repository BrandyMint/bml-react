import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import head from 'lodash/head';
import reduce from 'lodash/reduce';

import BLOCK_TYPES from 'constants/blockTypes';
import BLOCK_VIEWS from 'constants/blockViews';

import { selectBlockForAdding } from 'actions/blocks';

import LBlockAddForm from './LBlockAddForm';

const selectedIndexSelector = state => state.addBlockForm.selectedIndex;
const itemsSelector = () =>
  reduce(BLOCK_TYPES, (items, blockType) => {
    const firstView = head(BLOCK_VIEWS[blockType.type]);

    if (firstView) {
      items.push({
        ...firstView,
        type: blockType.type,
      });
    }

    return items;
  }, []);

const lBlockAddFormSelector = createStructuredSelector({
  items: itemsSelector,
  selectedIndex: selectedIndexSelector,
});

const actions = {
  onSelect: selectBlockForAdding,
};

export default connect(lBlockAddFormSelector, actions)(LBlockAddForm);