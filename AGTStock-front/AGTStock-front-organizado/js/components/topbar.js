function Topbar() {
  return `<header class="topbar">
    <div class="mobile-brand"><strong>AGTStock</strong></div>
    <div class="top-actions">
      <button class="icon-btn" onclick="showToast('Você não tem novas notificações.')">🔔</button>
      <div class="profile"><div class="avatar">H</div><div><strong>Henry</strong><small>Administrador</small></div></div>
    </div>
  </header>`;
}