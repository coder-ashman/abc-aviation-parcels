let intervalId;

export function bootstrap() {
  console.log('💬 Chat parcel: Bootstrapping');
  return Promise.resolve();
}

export function mount(props) {
  console.log('💬 Chat parcel: Mounting', props);
  const container = props.domElement || document.getElementById('aside-slot');
  const div = document.createElement('div');
  div.id = 'chat-module';
  div.style.padding = '16px';
  div.style.background = '#fff8e1';
  div.style.borderRadius = '8px';
  div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  div.innerHTML = '<strong style="display: block; margin-bottom: 8px; color: #f57c00;">Chat</strong><div id="chat-messages" style="font-size: 12px; color: #e65100;"></div>';
  container?.appendChild(div);
  
  // Simulate chat notifications
  const messagesContainer = div.querySelector('#chat-messages');
  intervalId = setInterval(() => {
    const message = document.createElement('div');
    message.textContent = `💬 New message at ${new Date().toLocaleTimeString()}`;
    message.style.marginTop = '4px';
    message.style.padding = '4px 8px';
    message.style.background = '#fff3e0';
    message.style.borderRadius = '4px';
    messagesContainer?.appendChild(message);
  }, 5000);
  
  console.log('✅ Chat parcel: Mounted');
  return Promise.resolve();
}

export function unmount() {
  console.log('💬 Chat parcel: Unmounting');
  clearInterval(intervalId);
  document.getElementById('chat-module')?.remove();
  return Promise.resolve();
}