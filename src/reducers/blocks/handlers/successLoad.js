import backgroundResolver from 'helpers/backgroundResolver';

export default (state, { payload }) => backgroundResolver(payload.sections);
