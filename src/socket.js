import io from "socket.io-client";
import store from "./store";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("socket.io connected");

  setTimeout(() => {
    console.log("Getting variables and schedules from server");
    socket.emit("getVariables", {}, variables => {
      store.commit("setVariables", variables);
    });
    socket.emit("getSchedules", {}, schedules => {
      store.commit("setSchedules", schedules);
    });
  }, 1000);
});

socket.on("variableValueUpdated", variable => {
  store.commit("setVariableValue", variable);
});

socket.on("schedulesUpdated", schedules => {
  store.commit("setSchedules", schedules);
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

export function saveSchedule(schedule) {
  if (socket.connected) {
    // eslint-disable-next-line no-unused-vars
    socket.emit("saveSchedule", schedule);
  }
}

export function deleteSchedule(id) {
  if (socket.connected) {
    socket.emit("deleteSchedule", id);
  }
}
