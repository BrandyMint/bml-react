import createReducer from 'helpers/createReducer';

import {
  CANCEL_EDITING_BLOCK, START_EDITING_BLOCK,
} from 'actions/blocks';

const initialState = {
  uuid: '',
  type: '',
  view: '',
  data: {},
};

const handlers = {
  [START_EDITING_BLOCK]: (state, action) => ({
    ...action.payload.block,
  }),

  [CANCEL_EDITING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);

//   name: '',
//   description: '',
//   cookTime: '',
//   prepTime: '',
//   recipeYield: null,
//   image: null,

//   ingredients: [{ text: '' }],
//   instructions: [{ text: '' }],
// };



//   selectedIndex: null,
//   position: null,
// };

// const handlers = {
//   [START_ADDING_BLOCK]: (state, action) => ({
//     ...state,
//     position: action.payload.position,
//   }),
//   [SELECT_BLOCK_FOR_ADDING]: (state, action) => ({
//     ...state,
//     selectedIndex: action.payload.index,
//   }),
//   [CANCEL_ADDING_BLOCK]: () => initialState,
//   [SUBMIT_ADDING_BLOCK]: () => initialState,
// };

// export default createReducer(initialState, handlers);




// import assign from 'lodash/assign';
// import get from 'lodash/get';

// import createReducer from 'helpers/createReducer';
// import handleRecipeSelection from 'helpers/handleRecipeSelection';

// import {
//   RESET_RECIPE,

//   SAVE_RECIPE_SUCCESS,

//   LOAD_RECIPE_REQUEST,
//   LOAD_RECIPE_SUCCESS,
//   LOAD_RECIPE_FAILURE,
// } from 'actions/recipe';

// const initialState = {
//   isFetching: false,
//   isErrored: false,

//   data: {
//     name: '',
//     description: '',
//     cookTime: '',
//     prepTime: '',
//     recipeYield: null,
//     image: null,

//     ingredients: [{ text: '' }],
//     instructions: [{ text: '' }],
//   },
// };

// const updateRecipe = (state, action, extra = {}) => {
//   const id = get(action, 'payload.id');
//   const url = get(action, 'payload.externalUrl');

//   if (id !== state.id && url !== state.externalUrl) {
//     return state;
//   }

//   return assign({}, state, extra);
// };

// const handlers = assign({
//   [RESET_RECIPE]: () => initialState,

//   [SAVE_RECIPE_SUCCESS]: (state, action) =>
//     assign({}, state, action.payload),

//   [LOAD_RECIPE_REQUEST]: () =>
//     assign({}, initialState, { isFetching: true }),

//   [LOAD_RECIPE_SUCCESS]: (state, action) =>
//     assign({}, initialState, action.payload),

//   [LOAD_RECIPE_FAILURE]: () =>
//     assign({}, initialState, { isErrored: true }),

// }, handleRecipeSelection(updateRecipe));

// export default createReducer(initialState, handlers);
