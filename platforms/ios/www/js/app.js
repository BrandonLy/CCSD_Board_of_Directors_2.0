// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('CCSD_Board', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

var answer;
var triangle;

// Dropdown buttons for FAQ
function dropdown(i) {
  // Grab DOM element of answer
  answer = document.getElementsByClassName("answer")[i];
  // Check if answer is displayed
  if(answer.style.display == "block") {
    // Hide answer if already displayed
    answer.style.display = "none";
  } else {
    // If answer is not displayed, display it
    answer.style.display = "block";
  }

  //Change triangle direction
  triangle = document.getElementsByClassName("faq-triangle")[i];
  if(triangle.className.indexOf("right") != -1) {
    triangle.className = "down-triangle faq-triangle";
  } else {
    triangle.className = "right-triangle faq-triangle";
  }
  return false;
}

// Hamburger Menu
var menuCounter = 0
var menu;
var menuButton;
var pageContent;

function toggleMenu() {
  menu = document.getElementById("menu-wrapper");
  menuButton = document.getElementById("hamburger-button");
  pageContent = document.getElementById("content-wrapper");

  console.log(menu);

  if (menuCounter % 2 == 0) {
    menu.style.transform = "translateX(0px)";
    menuButton.style.transform = "translateX(175px)";
    pageContent.style.transform = "translateX(175px)";
    console.log('slide on');
  } else if(menuCounter % 2 != 0) {
    menu.style.transform = "translateX(-175px)";
    menuButton.style.transform = "translateX(0px)";
    pageContent.style.transform = "translateX(0px)";
    console.log('slide off');
  } else {
    console.log("you've got a problem cowboy");
  }

  menuCounter++;

  console.log('you\'ve toggled the menu');
}

//Continue Button for pledge
var page1;
var page2;

function continuePledge() {
  page1 = document.getElementById("form-page-1");
  page2 = document.getElementById("form-page-2");

  page1.style.display = "none";
  page2.style.display = "block";

}

var trusteesDrop;
var trusteesActive = false;
var trusteesTriangle;

function trusteesDropdown() {
  console.log('you\'ve toggled the trustees menu');
  trusteesDrop = document.getElementById("trustees-dropdown");
  trusteesTriangle = document.getElementById("trustees-triangle");
  if(trusteesActive == false) {
    trusteesDrop.style.display = "block";
    trusteesActive = true;
    trusteesTriangle.style.transform = "rotate(90deg)";
    console.log(trusteesTriangle);
  } else {
    trusteesDrop.style.display = "none";
    trusteesActive = false;
    trusteesTriangle.style.transform = "rotate(0deg)";
  }

  console.log("drop the bass");
}

var scrollThis;

function trusteesPage() {
  console.log('start page');
  var targetedSection = sessionStorage.getItem('pageSection');

  if (targetedSection == 'upcoming') {
    scrollThis = document.getElementById('upcoming');
    scrollThis.scrollIntoView();
  }else if (targetedSection == 'board-meetings') {
    scrollThis = document.getElementById('board-meetings') ;
    scrollThis.scrollIntoView();
  }else if (targetedSection == 'know') {
    scrollThis = document.getElementById('know') ;
    scrollThis.scrollIntoView();
  }else if (targetedSection == 'maps') {
    scrollThis = document.getElementById('maps') ;
    scrollThis.scrollIntoView();
  }else if (targetedSection == 'contact') {
    scrollThis = document.getElementById('contact') ;
    scrollThis.scrollIntoView();
  }

  console.log('end page');
}
