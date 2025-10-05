export default function chatParcel() {
  let intervalId;
  return {
    bootstrap() {
      return Promise.resolve();
    },
    mount(props) {
      const container = props.domElement || document.getElementById('aside-slot');
      const div = document.createElement('div');
      div.id = 'chat-module';
      div.style.padding = '8px';
      div.style.background = '#fff8e1';
      div.textContent = 'Chat (shared module)';
      container?.appendChild(div);
      // Simulate chat notifications
      intervalId = setInterval(() => {
        const message = document.createElement('div');
        message.textContent = `New message at ${new Date().toLocaleTimeString()}`;
        message.style.fontSize = '12px';
        div.appendChild(message);
      }, 5000);
      return Promise.resolve();
    },
    unmount() {
      clearInterval(intervalId);
      document.getElementById('chat-module')?.remove();
      return Promise.resolve();
    },
  };
}