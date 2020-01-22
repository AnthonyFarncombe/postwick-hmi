import { HubConnectionBuilder } from "@microsoft/signalr";
import store from "./store";

export let connection;

(async () => {
  let url = "https://postwick.heathwood.org.uk/api/hmihub";
  if (process.env.NODE_ENV === "development")
    url = "http://localhost:5000/hmihub";

  connection = new HubConnectionBuilder().withUrl(url).build();

  connection.on("VariableValueUpdated", (name, value) => {
    store.commit("setVariableValue", { name, value });
  });

  await connection.start();

  const variables = await connection.invoke("GetVariables");
  console.log(variables);
  store.commit("setVariables", variables);
})();
