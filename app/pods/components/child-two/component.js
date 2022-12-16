/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Component from '@ember/component';
import { computed } from '@ember/object';
//import {inject as service} from '@ember/service';



export default Component.extend({
    randomNumber: null,

    transformedRandomNumber: computed('randomNumber', function () {
        return `transformedRandomNumberinchildtwo ${this.get('randomNumber')}`

    }),
    init() {
        this._super(...arguments);
        console.log("child-two");
        // this.setRandomNumber = this.setRandomNumber.bind(this);
    },


    actions: {
        random() {
            const randomNumber = Math.random();
            this.set('randomNumber', randomNumber);
            this.get('setRandomNumber')(randomNumber)
            //console.log("clicked")
        }
    }

})