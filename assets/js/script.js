function dark(){
	document.querySelector('body').classList.add('theme-sombre');
  document.querySelector('body').classList.remove('theme-clair');
}

function light(){
	document.querySelector('body').classList.add('theme-clair');
  document.querySelector('body').classList.remove('theme-sombre');
}

document.querySelector('.dark-button').addEventListener('click', dark);
document.querySelector('.light-button').addEventListener('click', light);
