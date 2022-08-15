// ********************* create function for ul menu *************************

let myUl = document.querySelector("header .container nav ul");
let myToogle = document.querySelector(".toogle-menu");

myToogle.addEventListener("click", change);

let myLink = document.querySelectorAll("header .container nav ul li a");

function change() {
  if (myUl.classList.contains("spacial")) {
    myUl.classList.remove("spacial");
  } else {
    myUl.setAttribute("class", "spacial");
    myLink.forEach((link) => {
      link.setAttribute("class", "pad");
    });
  }
}

//****************** */ create left and right botton ***********************

let myLanding = document.querySelector(".landing");
let myLeft = document.createElement("i");
myLeft.setAttribute("class", "fas fa-angle-left");
myLeft.classList.add("class", "left");
let myRight = document.createElement("i");
myRight.setAttribute("class", "fas fa-angle-right");
myRight.classList.add("class", "right");
myLanding.appendChild(myLeft);
myLanding.appendChild(myRight);

let left = document.querySelector(".left");
let right = document.querySelector(".right");

let myColor = [
  "url(../images/landing.jpg)",
  "url(../images/shuffle-02.jpg)",
  "url(../images/shuffle-03.jpg)",
  "url(../images/shuffle-04.jpg)",
  "url(../images/shuffle-05.jpg)",
  "url(../images/shuffle-06.jpg)",
];

// first methode

right.addEventListener("click", create);
left.addEventListener("click", create);

function create() {
  let raandomColor = myColor[Math.floor(Math.random() * myColor.length)];
  document.styleSheets[2].rules[28].style.setProperty(
    "background-image",
    ` ${raandomColor}`,
    "important"
  );
}

//************************** */ second methode by setIntervale ***********************************

let start = setInterval(() => {
  create();
}, 2000);

// // ******************************

let myBollets = document.querySelectorAll(".bollets span");
[...myBollets].forEach((bull) => {
  bull.onclick = function () {
    [...myBollets].forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    create();
  };
});

// // *******************

let myUlPortfolio = document.querySelectorAll(".portfolio ul li");
[...myUlPortfolio].forEach((ele) => {
  ele.onclick = function () {
    [...myUlPortfolio].forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});

// start portfolio

let myPhoto = document.querySelectorAll(".slide .photo");
let menu = document.querySelectorAll(".portfolio ul li");

[...menu].forEach((ele) => {
  ele.addEventListener("click", filter);
});

// **************** fuction to remove and add class active to all element *********************
function filter() {
  [...menu].forEach((ele) => {
    ele.classList.remove("active");
  });
  this.classList.add("active");

  //***************** loop for all photo and add class hidden("display: "hidden) to all myPhoto ********************

  display();

  // ************ remove class disp for all my Photo *************************

  remove();

  // ************** add class disp to some photo not all photo just (document.querySelectorAll(this.dataset.num))********
  document.querySelectorAll(this.dataset.num).forEach((ele) => {
    ele.classList.add("disp");
  });
}

// ******************** function remove () ********************************************

function remove() {
  [...myPhoto].forEach((e) => {
    e.classList.remove("disp");
  });
}

function display() {
  [...myPhoto].forEach((e) => {
    e.classList.add("hidden");
  });
}

// **************************** add animate for photo *****************

let mySlide = document.querySelector(".slide");
let myImages = document.querySelectorAll(".photo img");
let myPortfolio = document.querySelector(".portfolio");
let mySlidParent = document.querySelector(".slide-parent");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myPortfolio.offsetTop) {
    mySlidParent.classList.add("anime");
  }
});

// ****************************************

// ************************* START VIDEO **********************

let botton = document.querySelector(".video-container .container .play");
let myVideo = document.querySelector(".video-container .container video");
let mySpan = document.querySelector(".video-container .container span");
let videoContainer = document.querySelector(".video-container");

botton.onclick = function () {
  this.classList.add("shadow");
  myVideo.classList.add("trans");
  mySpan.setAttribute("class", "opaci");
};
mySpan.onclick = function () {
  myVideo.classList.remove("trans");
  botton.classList.remove("shadow");
  this.classList.remove("opaci");
};

// ********************************

let background = [
  ".services",
  ".portfolio",
  ".about",
  ".users",
  ".pricing",
  ".contact-us",
];

background.forEach((ele) => {
  document.querySelector(ele).classList.add("background");
});

// ************ start cont down *******************

let myNumbers = document.querySelectorAll(".stat .container .box .number");
let number = document.querySelector(".stat .container .box .number.one");
let myStat = document.querySelector(".stat");

let check = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= myStat.offsetTop) {
    if (!check) {
      myNumbers.forEach((ele) => {
        countUp(ele);
      });
    }
    check = true;
  }
});

function countUp(number) {
  let count = number.dataset.goal;
  let start = setInterval(() => {
    if (count === number.innerHTML) {
      clearInterval(start);
    }
    number.innerHTML++;
  }, 1000 / count);
}

// **************************** start skills *************

let mySpans = document.querySelectorAll(".prog-holder .prog span");
let myUser = document.querySelector(".users");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myUser.offsetTop) {
    mySpans.forEach((span) => {
      span.classList.add("up");
    });
  }
});

// *********************** start pricing *****************

let pricing = document.querySelector(".pricing");
let cols = document.querySelectorAll(".pricing .col");
window.onscroll = function () {
  if (window.scrollY >= pricing.offsetTop - "50") {
    cols.forEach((col) => {
      col.classList.add("col-left");
      pricing.classList.add("heigth");
    });
  }
};

// ********************* start contact us ***************

let contact = document.querySelector(".contact-us");
let userInfo = document.querySelector(
  ".contact-us .container .global-info .user-info"
);
let userContact = document.querySelector(
  ".contact-us .container .global-info .user-contact"
);

window.addEventListener("scroll", function () {
  if (window.scrollY >= contact.offsetTop - "500") {
    userInfo.classList.add("inf");
    userContact.classList.add("conta");
  }
});
