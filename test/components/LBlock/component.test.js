import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import initialState from 'constants/initialState';

import { FULL_VIEWS_EXAMPLES_SECTIONS } from 'constants/fullViewsExamples';

import assign from 'lodash/assign';
import expect from 'expect';

import LBlock from 'components/EditorApp/LPage/LBlocks/LBlock/component';

const store = createStore(state => state, initialState);

const getProps = (extra = {}) =>
  assign({
    block: FULL_VIEWS_EXAMPLES_SECTIONS[0],
    onContentChange: expect.createSpy(),
  }, extra);

const props = getProps({
  isEditMode: true,
});

let output;

describe('Components: LBlock', () => {
  describe('enabled edit mode', () => {
    beforeEach(() => {
      output = TestUtils.renderIntoDocument(
        <I18nextProvider i18n={ i18n }>
          <Provider store={store}>
            <LBlock {...props} />
          </Provider>
        </I18nextProvider>
      );
    });

    it('should render top panel correctly', () => {
      expect(output.refs).toBeA('object');

      // const topPanel = output.refs.topPanel;
      // expect(topPanel).toBeA('object');
    });
  });
});
