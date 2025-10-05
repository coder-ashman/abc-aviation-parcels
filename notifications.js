export function bootstrap() {
  console.log('📢 Notifications parcel: Bootstrapping');
  return Promise.resolve();
}

export function mount(props) {
  console.log('📢 Notifications parcel: Mounting', props);
  const container = props.domElement || document.getElementById('aside-slot');
  const div = document.createElement('div');
  div.id = 'notifications-module';
  div.style.padding = '16px';
  div.style.background = '#e0f7fa';
  div.style.borderRadius = '8px';
  div.style.marginBottom = '16px';
  div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  div.innerHTML = '<strong style="display: block; margin-bottom: 8px; color: #00796b;">Notifications</strong><p style="margin: 0; font-size: 14px; color: #004d40;">No new notifications</p>';
  container?.appendChild(div);
  console.log('✅ Notifications parcel: Mounted');
  return Promise.resolve();
}

export function unmount() {
  console.log('📢 Notifications parcel: Unmounting');
  document.getElementById('notifications-module')?.remove();
  return Promise.resolve();
}