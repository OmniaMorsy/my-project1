/**
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
*/

/**
 * My Global Variables
 * 
*/
const fragment = document.createDocumentFragment();               //To store menu items
const navigation=document.getElementById('navbar__list');        // To append the fragment to it 
const sections=document.querySelectorAll('section');            //to store all sections in it

//build the navbar
sections.forEach(function(section) {
    let text= section.getAttribute('data-nav');
    let navLi= document.createElement('li');
    let navLink= document.createElement('a');
    let textNode= document.createTextNode(text);
    let className= document.createAttribute('class')
    className.value= 'menu__link';
    navLink.setAttributeNode(className);
    navLink.href = '#' + section.id;

    navLink.appendChild(textNode);
    navLi.appendChild(navLink);
    fragment.appendChild(navLi);
 })
 navigation.appendChild(fragment);

//add the active section
document.addEventListener('scroll',function (){
    sections.forEach((section) => {
        let rect= section.getBoundingClientRect();
        section.classList.remove('your-active-class');
        if (rect.top >=-500 && rect.bottom <=700){
        section.classList.add('your-active-class');
        }
    })
  });

///add the active link
//event that renews itself whenever we scroll
onscroll = function () { 
    let Position = document.documentElement.scrollTop;
  
    sections.forEach((section) => {
      if (
        Position >= section.offsetTop - section.offsetHeight * 0.15 &&
        Position <=section.offsetTop + section.offsetHeight - section.offsetHeight * 0.15) {
        let myId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(myId);
      }
    });
  };
//Create a function that removes all active classes
  let removeAllActiveClasses = function () {
    document.querySelectorAll("nav a").forEach((element) => {
        element.classList.remove("active");
    });
  };
  //Create a function that add active class
  let addActiveClass = function (AA) {
    var selectA = `nav a[href="#${AA}"]`;
    document.querySelector(selectA).classList.add("active");
  };

  //smooth scroll >> When I click on the link it scrolls to the section
  let links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
      let currentId = event.target.attributes.href.value;
      let section = document.querySelector(currentId);      
      section.scrollIntoView({
      behavior: "smooth",
     });
    });
  });