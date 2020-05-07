export const socketLocation = "http://localhost:3700"

export const socketOptions = {
  transports: ["websocket"],
  extraHeaders: {
    connection: "close",
  },
}
