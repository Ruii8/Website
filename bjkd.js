let numDisksSelect = document.createElement('select');
numDisksSelect.id = 'numdisks';

for (let n = 0; n < 10; n++) {
  let option = new Option((3 + n), 3 + n);
  numDisksSelect.appendChild(option);
}

let periodSelect = document.createElement('select');
periodSelect.id = 'period';

for (let n = 0; n < 5; n++) {
  let option = new Option(0.5 * (n + 1), 0.5 * (n + 1));
  periodSelect.appendChild(option);
}

let startButton = document.createElement('input');
startButton.type = 'button';
startButton.id = 'startbtn';
startButton.className = 'button1';
startButton.value = 'Start';
startButton.onclick = startgame;
startButton.onmouseover = function() {
  showhint('Start the game');
};
startButton.onmouseout = function() {
  hidehint('Start');
};

let pauseButton = document.createElement('input');
pauseButton.type = 'button';
pauseButton.id = 'pausebtn';
pauseButton.className = 'button1';
pauseButton.value = 'Pause';
pauseButton.onclick = pausegame;

let resumeButton = document.createElement('input');
resumeButton.type = 'button';
resumeButton.id = 'resumebtn';
resumeButton.className = 'button1';
resumeButton.value = 'Resume';
resumeButton.onclick = resumegame;

document.body.appendChild(numDisksSelect);
document.body.appendChild(startButton);
document.body.appendChild(pauseButton);
document.body.appendChild(resumeButton);
document.body.appendChild(periodSelect);

function startgame() {
  let numDisksSelect = document.getElementById('numdisks');
  let N = numDisksSelect.options[numDisksSelect.selectedIndex].value;
  tower(N);
  move();
  movedisk(0);
}

function pausegame() {
  clearTimeout(handle);
}

function resumegame() {
  movedisk(orderOflnstruction);
}

function showhint(hint) {
  let hintDiv = document.createElement('div');
  hintDiv.id = 'hint';
  hintDiv.style.position = 'absolute';
  hintDiv.style.left = '200px';
  hintDiv.style.top = '300px';
  hintDiv.style.backgroundColor = 'yellow';
  hintDiv.style.color = 'purple';
  hintDiv.style.borderRadius = '4px';
  hintDiv.style.boxShadow = '4';
  hintDiv.innerHTML = hint;
  document.body.appendChild(hintDiv);
}

function hidehint(btnvalue) {
  let hintDiv = document.getElementById(btnvalue);
  hintDiv.parentNode.removeChild(hintDiv);
}

let time;
window.onblur = function() {
  time = (new Date()).getTime();
}

window.onfocus = function() {
  let time1 = (new Date()).getTime();
  let diff = time1 - time;
  showhint('You have left for ' + diff + ' milliseconds');
  setTimeout(function() {
    hidehint('time');
  }, 2000);
}
