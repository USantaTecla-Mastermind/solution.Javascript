const {PlayView} = require('./playview');
const {StartView} = require('./starview');
const {ResumeView} = require('./resumeview');
const {ControllersVisitor} = require('../controllers/controllersvisitor');
const { StartController } = require('../controllers/startcontroller');
const { PlayController } = require('../controllers/playcontroller');
const {ResumeController} = require('../controllers/resumecontroller');
class View extends ControllersVisitor {
	
	startView;

	playView;

	resumeView;

	constructor() {
        super();
		this.startView = new StartView();
		this.playView = new PlayView();
		this.resumeView = new ResumeView();
	}

	interact(acceptorController) {
		acceptorController.accept(this);
	}

	
    visit(controller) {
        if(controller instanceof StartController)
        this.startView.interact(controller);
        if(controller instanceof PlayController)
        this.playView.interact(controller);
        if(controller instanceof ResumeController)
		this.resumeView.interact(controller);
	}

	/*
	visit(playController) {
		this.playView.interact(playController);
	}

	
	visit(resumeController) {
		this.resumeView.interact(resumeController);
	}*/

}

module.exports.View = View;