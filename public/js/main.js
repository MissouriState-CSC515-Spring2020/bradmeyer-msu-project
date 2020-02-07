'use strict';
document.addEventListener('DOMContentLoaded', function() {
	let elems = document.querySelectorAll('.sidenav');
	let instances = M.Sidenav.init(elems);
	// nav bar and side nav dropdowns aren't working together
	// unless they are initialized separately?
	let dropdown2 = document.querySelector('.side-dropdown-trigger');
	let instanceDropdown2 = M.Dropdown.init(dropdown2);
	let dropdown1 = document.querySelector('.dropdown-trigger');
	let instanceDropdown1 = M.Dropdown.init(dropdown1);
});