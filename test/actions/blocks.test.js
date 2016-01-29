import expect from 'expect';

import identity from 'lodash/identity';

import {
  DOWN_BLOCK_POSITION,
  SUBMIT_EDITING_BLOCK,

  downBlockPosition,
  submitEditingBlock,
} from 'actions/blocks';

describe('Action creators: blocks', () => {
  describe('action: downBlockPosition', () => {
    it('should handle down block position', () => {
      const uuid = 'hello';
      const action = downBlockPosition(uuid);

      expect(action).toEqual({
        type: DOWN_BLOCK_POSITION,
        payload: { uuid },
      });
    });
  });

  describe('action: submitEditingBlock', () => {
    it('should handle submitting editable block', () => {
      const block = { uuid: 'testUuid' };
      const getState = () => ({
        editBlockForm: { block },
      });
      const action = submitEditingBlock()(identity, getState);

      expect(action).toEqual({
        type: SUBMIT_EDITING_BLOCK,
        payload: { block },
      });
    });
  });
});
