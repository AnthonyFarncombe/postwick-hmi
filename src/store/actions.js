import { connection } from "../signalr";

export default {
  async setVariableValue(context, payload) {
    if (connection) {
      await connection.invoke("SetVariableValue", payload.name, payload.value);
      context.commit("setVariableValue", payload);
    } else {
      throw new Error("SignalR connection is not initialized");
    }
  }
};
