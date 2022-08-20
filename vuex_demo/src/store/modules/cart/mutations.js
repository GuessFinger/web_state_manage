import * as TYPES from "../action-types";

const cartMutations = {
  [TYPES.CHANGE_COUNT](state) {
    state.count++;
  },
};
export default cartMutations;
