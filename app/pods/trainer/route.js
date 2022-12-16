/* eslint-disable no-console */
import Route from '@ember/routing/route';

export default Route.extend({

setupController(controller){
    controller.set('firstName', 'Reshma')
    controller.set('lastName', 'Begum')

},
actions: {
    addButton() {
        console.log("added")

        this.controller.set('firstName', 'sabira')
    }
}

});
