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
  div.className = 'c-card c-card--flat parcel-container';
  
  // Get current theme and apply appropriate styling
  const currentBrand = document.documentElement.getAttribute('data-brand') || 'A';
  div.setAttribute('data-theme', currentBrand);
  
  div.innerHTML = `
    <div class="c-card__label">Chat</div>
    <div id="chat-messages" class="c-card__meta" style="display:flex; flex-direction:column; gap:8px;"></div>
  `;
  
  // Apply theme-specific styling
  applyParcelTheme(div, currentBrand);
  
  container?.appendChild(div);
  
  // Simulate chat notifications
  const messagesContainer = div.querySelector('#chat-messages');
  intervalId = setInterval(() => {
    const message = document.createElement('div');
    message.className = 'c-badge c-badge--info';
    message.textContent = `New message at ${new Date().toLocaleTimeString()}`;
    messagesContainer?.appendChild(message);
  }, 5000);
  
  console.log('✅ Chat parcel: Mounted');
  return Promise.resolve();
}

function applyParcelTheme(element, theme) {
  // Remove existing theme classes
  element.classList.remove('parcel-training-a', 'parcel-training-b', 'parcel-maintenance', 'parcel-default');
  
  // Add theme-specific class
  switch (theme) {
    case 'training-a':
      element.classList.add('parcel-training-a');
      break;
    case 'training-b':
      element.classList.add('parcel-training-b');
      break;
    case 'maintenance':
      element.classList.add('parcel-maintenance');
      break;
    default:
      element.classList.add('parcel-default');
  }
}

export function unmount() {
  console.log('💬 Chat parcel: Unmounting');
  clearInterval(intervalId);
  document.getElementById('chat-module')?.remove();
  return Promise.resolve();
}
