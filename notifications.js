export function bootstrap() {
  console.log('📢 Notifications parcel: Bootstrapping');
  return Promise.resolve();
}

export function mount(props) {
  console.log('📢 Notifications parcel: Mounting', props);
  const container = props.domElement || document.getElementById('aside-slot');
  const div = document.createElement('div');
  div.id = 'notifications-module';
  div.className = 'c-card c-card--flat parcel-container';
  
  // Get current theme and apply appropriate styling
  const currentBrand = document.documentElement.getAttribute('data-brand') || 'A';
  div.setAttribute('data-theme', currentBrand);
  
  div.innerHTML = `
    <div class="c-card__label">Notifications</div>
    <div class="c-card__meta">No new notifications</div>
  `;
  
  // Apply theme-specific styling
  applyParcelTheme(div, currentBrand);
  
  container?.appendChild(div);
  console.log('✅ Notifications parcel: Mounted');
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
  console.log('📢 Notifications parcel: Unmounting');
  document.getElementById('notifications-module')?.remove();
  return Promise.resolve();
}
