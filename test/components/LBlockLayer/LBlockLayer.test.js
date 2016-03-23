import React from 'react';
import TestUtils from 'react-addons-test-utils';

import assign from 'lodash/assign';
import expect from 'expect';

import LBlockLayer
  from 'components/EditorApp/LPage/LBlocks/LBlock/LBlockLayer/LBlockLayer';

const getProps = (extra = {}) =>
  assign({
    block: {},
    children: <span />,
    isEditMode: false,
    hasMultipleBlocks: false,
    hasMultipleViews: false,

    onBlockPositionDown: expect.createSpy(),
    onBlockPositionUp: expect.createSpy(),
    onEditingStart: expect.createSpy(),
    onViewSwitchNext: expect.createSpy(),
    onViewSwitchPrev: expect.createSpy(),
  }, extra);

const props = getProps({
  isEditMode: true,
});

let output;

describe('Components: LBlockLayer', () => {
  describe('enabled edit mode', () => {
    beforeEach(() => {
      output = TestUtils.renderIntoDocument(<LBlockLayer {...props} />);
    });

    it('should render top panel correctly', () => {
      expect(output.refs).toBeA('object');

      // const topPanel = output.refs.topPanel;
      // expect(topPanel).toBeA('object');
    });
  });
});
