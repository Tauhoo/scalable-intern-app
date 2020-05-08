export const socketLocation = "http://172.20.10.9:3700"

export const socketOptions = {
  transports: ["websocket"],
  extraHeaders: {
    connection: "close",
  },
}
