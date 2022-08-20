import * as TYPES from "../action-types";

const cartActions = {
  async [TYPES.CHANGE_COUNT2](state, value) {
    console.log(state, value);
    // 这里还是不能直接修改状态值，需要commit
    state.commit(TYPES.CHANGE_COUNT);
  },
};
export default cartActions;
