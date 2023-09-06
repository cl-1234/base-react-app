const initSocket = () => {
  const socket = new WebSocket('ws://localhost:4000');
  socket.onopen = (e) => {
    console.log('open connection established, now you can send message');
    window.socket = socket;
  };
  socket.onmessage = (e) => {
    console.log('you has received message', e);
  };
  socket.onclose = (e) => {
    console.log('connect was clean', e);
  };
  socket.onerror = (e) => {
    console.error('connection is error', e);
  };
};
export default initSocket;
