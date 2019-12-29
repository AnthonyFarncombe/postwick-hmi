import { HubConnectionBuilder } from "@microsoft/signalr";
import store from "./store";

(async () => {
  const connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5000/hmihub")
    .build();

  connection.on("VariableValueUpdated", (name, value) => {
    store.commit("setVariableValue", { name, value });
  });

  await connection.start();

  const variables = await connection.invoke("GetVariables");
  console.log(variables);
  store.commit("setVariables", variables);
})();
