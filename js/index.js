// Your code goes here
// 1) Mouseover 
// selects the bus pic 
const busPic =  document.querySelector('.intro img');

     busPic.addEventListener("mouseenter", () => {
         busPic.style.padding = "100px";
         busPic.style.backgroundColor = "grey";
     });
     // will mmake bus pic smaller and give it a gray background color 

     // 2) ReSize 

const imgContent = document.querySelector(".img-content img");
window.addEventListener("resize", () => {
  imgContent.src =
    "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
});

// 3) Click

// will turn the title 'Fun Bus' Green 
document.querySelectorAll('.logo-heading').forEach((title) => {
    title.addEventListener('click', (e)  => {
        console.log(e);
        title.style.color = 'cyan';
    });
});

// 4) dbl. click
// turns the header light blue and bold text 

const header = document.querySelector('header');

header.addEventListener('dblclick', () => {
    header.style.background = 'yellow';
    
});

// 5) keydown 
// when user first presses down on the f key they will get a window alert and the footer will change to blue, if users pressed any other color footer will become pink 

const footer = document.querySelector(".footer");
window.addEventListener("keydown", (e) => {
  if (e.key === "f") {
    footer.style.background = "blue";
    alert (" you just hit the f key!")
  } else {
    footer.style.background = "pink";
  }
});

// 6) Load 
// will populate the dialag as window pop up
window.addEventListener("load", (e) => {
    alert("Just a sec! We're getting the page ready :)");
    e.stopPropagation();
  });

  // 7) Wheel 
// obj will respond to scale 
function zoom(event) {
    event.preventDefault();
  
    scale += event.delay * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4);
  
    // Apply scale transform
    header.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  header.onwheel = zoom;

  // 8) context menu 
// this will prevent the context menu from populatiing on the nav bar

const nav = document.querySelector(".nav");

nav.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

//9. Keyup
// when the user presses then releses the 4 key, the content destion section will change style 
const changeFooter = document.querySelector(".content-destination");
window.addEventListener("keyup", (event) => {
  if (event.code === 3) {
    return;
  }
  changeFooter.style.color = "pink";
  changeFooter.style.fontWeight = "bold"

});

// 10) scroll 
// when the user scrolls through the page the background will change color
const changeToGrey = document.querySelector("body");
window.addEventListener("scroll", () => {
  changeToGrey.style.background = "grey";
});

// Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble


// this will put a black border around the second obj in the destination class
const changeDestination = document.getElementsByClassName("destination");
changeDestination[1].addEventListener('click', (e) => {
  changeDestination[1].style.border = '15px dashed black';
  e.stopPropagation();
})


// will apply a black border around the entire content pick class 
const changeAllDestination = document.getElementsByClassName('content-pick');
changeAllDestination[0].addEventListener('click', (e) => {
  changeAllDestination[0].style.border = '15px dashed black';
});

// Stop the navigation items from refreshing the page by using `preventDefault()`

const stopNav = document.getElementsByClassName('.nav');
stopNav.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
});