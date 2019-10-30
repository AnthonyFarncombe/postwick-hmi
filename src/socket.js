import io from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("socket.io connected");

  setTimeout(() => {
    console.log("Getting variables from server...");
    socket.emit("getVariables", {}, variables => {
      console.log(variables);
    });
  }, 1000);
});

socket.on("disconnect", () => {
  console.log("socket.io disconnected");
});
