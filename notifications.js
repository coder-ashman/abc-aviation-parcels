export default function notificationsParcel() {
  return {
    bootstrap() {
      return Promise.resolve();
    },
    mount(props) {
      const container = props.domElement || document.getElementById('aside-slot');
      const div = document.createElement('div');
      div.id = 'notifications-module';
      div.style.padding = '8px';
      div.style.background = '#e0f7fa';
      div.textContent = 'Notifications (shared module)';
      container?.appendChild(div);
      return Promise.resolve();
    },
    unmount() {
      document.getElementById('notifications-module')?.remove();
      return Promise.resolve();
    },
  };
}