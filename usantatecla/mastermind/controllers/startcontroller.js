const {AcceptorController} = require ('./aceptorcontroller');
const {Session} = require ('../models/session');
class StartController extends AcceptorController {

    session;
	constructor(session) {
        super(session);
        this.session = session;
	}
	
	start() {
		this.session.next();
	}
	
    accept(controllersVisitor) {
        //console.log(controllersVisitor);
		controllersVisitor.visit(this);
	}

}
module.exports.StartController = StartController;