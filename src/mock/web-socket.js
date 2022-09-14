import wsm from 'wsmock-js';

export default function useMock() {
  wsm.mock({
    url: 'ws://localhost/ws',
    sendInterval: 'onreceive',
    receiver(data) {
      // 'data' is sent by webSocket.send in browser
      console.log(data);
    },
    sender() {
      // Simulating server send
      this.response = 'This is a message sent by server.';
    },
  });
}
