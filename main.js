// Get DOM Elements
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get modalTitle
var modalTitle = document.getElementById('modalTitle');

// Events
// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to Open modal
function openModal() {
/*
// Get images
//var apiUrl = 'https://photorankapi-a.akamaihd.net?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2&customers=215757&media=recent';
fetch(apiUrl).then(response => {
    return response.json();}).then(data => {
    // Work with JSON data here
    console.log(data);
}).catch(err => {
    // Do something for an error here
});*/


  modal.style.display = 'block';
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    modalTitle.innerHTML = "Mobile mode";
  }else{
    modalTitle.innerHTML = "Desktop mode";
  }
}

// Function to Close modal If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}