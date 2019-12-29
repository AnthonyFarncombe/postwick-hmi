export default {
  setVariables(state, variables) {
    state.variables = variables;
  },
  setVariableValue(state, payload) {
    const variable = state.variables.find(v => v.name === payload.name);
    if (variable) variable.value = payload.value;
  }
};
