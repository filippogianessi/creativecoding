var d1 = document.getElementById('demo');

function generateRandomNumber() {
  return Math.floor(Math.random() * 360);
}

function renderItem(rotation) {
  return '<img src="item.svg" class="item" style="transform:rotate(' + rotation +'deg)">';
}



for(i = 0; i < 500; i++) {
  d1.insertAdjacentHTML('beforeend', renderItem(generateRandomNumber()));
}
