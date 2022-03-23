document.addEventListener('DOMContentLoaded', function() {

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

})

// function handleSubmit(event) {
// event.preventDefault();

// const data = new FormData(event.target);

// const value = data.get('name');
// const value = data.get('email');
// const value = data.get('subject');

// console.log({ value });
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

// alert("Thanks for your message!");

// }