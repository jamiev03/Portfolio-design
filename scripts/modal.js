// //Get modal element
// let modal = document.getElementById('simpleModal');

// //Get modal button
// let modalBtn = document.getElementById('modalBtn');

// //Get close button 
// let closeBtn = document.getElementById('closeBtn');

// //listen for click event open
// modalBtn.addEventListener('click', openModal);

// //listen for click event close
// closeBtn.addEventListener('click', closeModal);

// //add event listener to the window
// window.addEventListener('click', clickOutside);

// //function to open modal
// function openModal() {
//     modal.style.display = 'block';
// } 

// //function to close modal
// function closeModal() {
//     modal.style.display = 'none';
// }

// //function to close Modal on outside click event
// function clickOutside(e) {
//     if (e.target == modal){
//         modal.style.display = 'none';
//     }
// }

document.getElementById("link").onclick = function(e) {
    e.preventDefault();
    document.getElementById("popupdarkbg").style.display = "block";
    document.getElementById("popup").style.display = "block";
    document.getElementById('popupiframe').src = "./projects/project-1.html";
    document.getElementById('popupdarkbg').onclick = function() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popupdarkbg").style.display = "none";
    };
    return false;
  }
  
  window.onkeydown = function(e) {
      if (e.keyCode == 27) {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popupdarkbg").style.display = "none";
        e.preventDefault();
        return;
      }
  }
