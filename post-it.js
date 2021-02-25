document.querySelectorAll('#post-it > *').forEach((item, i) => {
  let target = document.querySelector(item.dataset.target)
  target.appendChild(item)
  target.style.position = 'relative'
});
