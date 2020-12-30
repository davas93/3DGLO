'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import smoothScroll from './modules/smoothScroll';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import replacePhoto from './modules/replacePhoto';
import calc from './modules/calc';
import validInputs from './modules/validInputs';
import sendForm from './modules/sendForm';

// Timer
countTimer('31 December 2020');
//Menu
toggleMenu();
//Smooth scrolling
smoothScroll();
//Popup
togglePopup();
//Tabs
tabs();
//Slider
slider();
//replaceImage
replacePhoto();
//Calc
calc(100);
//validate inputs
validInputs();
//send-AJAX-form
sendForm();
