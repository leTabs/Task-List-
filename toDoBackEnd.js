const input = document.querySelector('input');
//the input element 
const button = document.querySelector('button'); 
// the button 
const section = document.querySelector('.things');
// the are that the task are registered

const append = function() {
  // we create a p element and we assing to the section
  const newSpan = document.createElement('p');
  newSpan.textContent = ') ' + input.value;
  // the new p element gets the text of the input
  section.appendChild(newSpan);
  newSpan.addEventListener('click', removeThis);

  // Storing the task in local storage
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.push(newSpan.textContent.trim());
  localStorage.setItem('tasks', JSON.stringify(storedTasks));

  input.value=''; // reseting the input section
}
const removeThis = function() {
  this.remove();
  const taskText = this.textContent.trim();
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const updatedTasks = storedTasks.filter((task) => task !== taskText);
  // filtering the stored task and keeping only the ones that are unequal to the selected one
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  // reseting them
}


// Retrieving tasks from the local storage to get displayed after reopening the browser
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
storedTasks.forEach((taskText) => {
  const newSpan = document.createElement('p');
  newSpan.textContent = taskText;
  section.appendChild(newSpan);
  newSpan.addEventListener('click', removeThis);
});

//storing when clicked or the "enter" key is pressed
button.addEventListener('click', append);
input.addEventListener('keydown', function(pressing) {
  if (pressing.keyCode == 13) {
    append();
  }
});