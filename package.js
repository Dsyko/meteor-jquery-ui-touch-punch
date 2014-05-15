Package.describe({
	summary: "jquery-ui-touch-punch project, Enable iPad/Phone/Pod touch interaction to jQuery UI controls"
});

Package.on_use(function (api){
	api.use('jquery', 'client');
	api.add_files('touch-punch/jquery.ui.touch-punch.js', 'client');
});