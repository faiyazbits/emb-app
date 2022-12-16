/* eslint-disable no-console */
import Component from '@ember/component';
import { computed } from '@ember/object';
//import { inject as service } from '@ember/service';


export default Component.extend({
    RandomNumber: null,


    transformedRandomNumber: computed("randomNumber", function () {
        return `transformedRandomNumber ${this.get("randomNumber")}`

    }),
    init() {
        this._super(...arguments);
        
        this.publicApi = {
            setRandomNumber: this.setRandomNumber.bind(this)
        }
        console.log('child')

    },
    didInsertElement() {
        this._super(...arguments)
        const action = this.get('registeredPublicApi')

        if (action) {
            action(this.publicApi)
        }

    },
    setRandomNumber(randomNumber) {
        this.set('randomNumber', randomNumber)
    }

})