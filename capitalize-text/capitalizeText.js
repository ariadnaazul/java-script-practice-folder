var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {
 var input = cities[i];

 var lower = input.toLowerCase();
 var firstLetter = lower.slice(0,1);
 var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());

 var result = capitalized;
 var listItem = document.createElement('li');
 listItem.textContent = result;
 list.appendChild(listItem);
}