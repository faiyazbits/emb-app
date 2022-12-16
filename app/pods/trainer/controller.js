import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({

    fullName: computed('firstName','lastName', function(){
        const firstName = this.firstName;
        const lastName = this.lastName;
        return `${firstName}- ${lastName}`
    })


});
