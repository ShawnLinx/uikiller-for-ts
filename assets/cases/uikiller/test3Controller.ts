
export default class Controller {

    _onImageTouchEnd(sender, touchEvent) {
        this._testLabel.$Label.string = JSON.stringify(touchEvent.getLocation());
    }
}