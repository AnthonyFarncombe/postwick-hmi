import io from "socket.io-client";
import store from "./store";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("socket.io connected");

  setTimeout(() => {
    console.log("Getting variables from server...");
    socket.emit("getVariables", {}, variables => {
      store.commit("setVariables", variables);
    });
  }, 1000);
});

socket.on("variableValueUpdated", variable => {
  store.commit("setVariableValue", variable);
});

socket.on("disconnect", () => {
  console.log("socket.io disconnected");
});

export function setVariableValue(variable) {
  if (socket.connected) {
    socket.emit("setVariableValue", variable, response => {
      console.log(response);
    });
  }
}
