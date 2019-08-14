import Popper from "popper.js";

try {
    window.$ = window.jQuery = require('jquery');
    window.Popper = Popper;

	require('bootstrap');
	require('jquery-mask-plugin');
	require('owl.carousel');
} catch (e) {}