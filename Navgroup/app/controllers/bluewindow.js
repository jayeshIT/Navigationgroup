$.btnyellow.addEventListener('click', function(e) {
	Alloy.Globals.openYellow();
});

var rBtn3 = Ti.UI.createButton({
	title : 'rBtn3'
});
rBtn3.addEventListener('click', function(e) {
	Alloy.Globals.openYellow();
});
$.winblue.setRightNavButton(rBtn3); 