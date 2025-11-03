function toggleDetalles(id, btn) {
  var detalles = document.getElementById(id);
  var abierto = detalles.style.display === 'block';
  document.querySelectorAll('.detalles').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.vermas').forEach(boton => boton.textContent = 'Ver más');
  if (!abierto) {
    detalles.style.display = 'block';
    btn.textContent = 'Ver menos';
  }
}
