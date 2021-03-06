//加载条
var opts = {
   lines: 11, // The number of lines to draw
  	length: 0, // The length of each line
  	width: 8, // The line thickness
  	radius: 30, // The radius of the inner circle
  	corners: 1, // Corner roundness (0..1)
  	rotate: 0, // The rotation offset
  	direction: 1, // 1: clockwise, -1: counterclockwise
  	color: '#21c592', // #rgb or #rrggbb or array of colors
  	speed: 1.2, // Rounds per second
  	trail: 100, // Afterglow percentage
  	shadow: false, // Whether to render a shadow
  	hwaccel: false, // Whether to use hardware acceleration
  	className: 'spinner', // The CSS class to assign to the spinner
  	zIndex: 2e9, // The z-index (defaults to 2000000000)
  	top: '40px', // Top position relative to parent
  	left: '50%' // Left position relative to parent    
};
var target = document.getElementById('loading');
var spinner = new Spinner(opts).spin(target);
