function openBlueWindow() {
	var win3 = Alloy.createController('bluewindow').getView();
	$.nav.open(win3, {
		animated : true
	});
}

Alloy.Globals.openYellow = function() {
	var win3 = Alloy.createController('yellow').getView();
	$.nav.open(win3, {
		animated : true
	});
};
$.nav.open();
//$.index.open();
