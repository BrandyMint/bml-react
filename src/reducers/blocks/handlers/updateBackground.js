import map from 'lodash/map';
import backgroundResolver from 'helpers/backgroundResolver';

export default (state, { payload, crossPayload }) =>
  backgroundResolver(
    map(
      state, (block) =>
      (
        block.uuid === crossPayload.uuid ? { ...block, backgroundImage: payload } : block
      )
    )
  );
