rollList = ['period', 'length', 'diet']

// generates a button to toggle visibility for each filter
rollList.forEach(roll => {
  document.getElementById('header').innerHTML += "<button onclick=onClick(\"" + roll + "\")>" + roll + "</button>";
})

// toggles visibility by modifying css class
function onClick(roll) {
  var filter = document.getElementById(roll);
  filter.classList.toggle('visible');
  rollList.forEach(elem => {
    if (elem != roll) {
      var other = document.getElementById(elem);
      other.classList.remove('visible');
    }
  })
}

// fetches shared info for each roll
function getInfo(dino, dinoItem) {
  const img = document.createElement('img');
  const name = document.createElement('h3');
  name.innerText = dino.name;
  img.src = dino.img;
  const info = document.createElement('p');
  info.innerHTML = dino.info;
  dinoItem.appendChild(name);
  dinoItem.appendChild(img);
  dinoItem.appendChild(info);

}


const periodList = document.querySelector('.period-roll');
const times = ["Early Jurassic", "Late Jurassic", "Early Cretaceous", "Late Cretaceous"];

// sorts by category and appends each category to roll
times.forEach(time => {
  const category = document.createElement('h2');
  category.innerText = time;
  periodList.appendChild(category);
  dinos.forEach(dino => {
    if (dino.period == time) {
      const dinoItem = document.createElement('li');
      getInfo(dino, dinoItem);
      dinoItem.className = 'dino-item';
      periodList.appendChild(dinoItem);
    }
  });
})


const lengthList = document.querySelector('.length-roll');
var unsortedList = [];

// parses length data
dinos.forEach(dino => {
  if (Number.isNaN(parseFloat(dino.length))) {
    unsortedList.push([parseFloat(dino.length.replace(/\D/g, "")), dino]);
  } else {
    unsortedList.push([parseFloat(dino.length), dino]);
  };
})

// sorts by length and appends result to roll
var sortedList = unsortedList.sort(function (a, b) { return b[0] - a[0] });

sortedList.forEach(dino => {
  const length = document.createElement('h3');
  length.innerText = dino[1].length;
  const dinoItem = document.createElement('li');
  dinoItem.appendChild(length);
  getInfo(dino[1], dinoItem);
  dinoItem.className = 'dino-item';
  lengthList.appendChild(dinoItem);
});

const dietList = document.querySelector('.diet-roll');
const diets = ["carnivorous", "herbivorous"];

// sorts by category and appends each category to roll
diets.forEach(e => {
  const category = document.createElement('h2');
  category.innerText = e;
  dietList.appendChild(category);
  dinos.forEach(dino => {
    if (dino.diet == e) {

      const dinoItem = document.createElement('li');
      getInfo(dino, dinoItem);
      dinoItem.className = 'dino-item';
      dietList.appendChild(dinoItem);
    }
  });
})
