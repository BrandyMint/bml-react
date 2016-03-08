import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import reduce from 'lodash/reduce';

import VIEW_EXAMPLES from 'constants/viewExamples';

import { selectBlockForAdding } from 'actions/blocks';

import LBlockAddForm from './LBlockAddForm';

const selectedIndexSelector = state => state.addBlockForm.selectedIndex;
const itemsSelector = () =>
  reduce(VIEW_EXAMPLES, (items, view) => {
    if (view) {
      items.push(view);
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
