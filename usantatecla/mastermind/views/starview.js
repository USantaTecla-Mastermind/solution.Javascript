const {SecretCombinationView} = require('./secretcombinationview');
const {MessageView} = require('./messageview');
const {StartController} = require('../controllers/startcontroller')
class StartView {
	

	
	interact(startController) {
        startController = new StartController(startController.session);
        startController.start();
        //console.log(startController);
		new MessageView(new MessageView().TITLE).writeln();
		this.secretCombinationView = new SecretCombinationView(startController);
		this.secretCombinationView.writeln();
	}

}
module.exports.StartView = StartView;