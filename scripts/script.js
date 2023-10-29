function toHome(){
  window.location.href = 'home.html';
}
function toBerita(){
  window.location.href = 'berita.html';
}
function changeIcon(id, idTitle) {
  const icon = document.getElementById(id);
  const title = document.getElementById(idTitle);
  if (icon.classList.contains("fa-chevron-down")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
    title.classList.add('main-text-color');
  } else {
    title.classList.remove('main-text-color');
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
};