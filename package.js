Package.describe({
	summary: "jquery-ui-touch-punch project, Enable iPad/Phone/Pod touch interaction to jQuery UI controls"
});

Package.on_use(function (api){
	api.add_files('touch-punch/jquery.ui.touch-punch.min.js', 'client');
});