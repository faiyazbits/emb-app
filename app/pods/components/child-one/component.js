/* eslint-disable no-unused-vars */
import Component from '@ember/component';
import {computed} from '@ember/object';
//import {inject as service} from '@ember/service';



export default Component.extend({

    randomNumber:null,

    transformedRandomNumberInchildone: computed('randomNumber', function (){
        return `transformedRandomNumberchildone ${this.get('randomNumber')}`

    }),

    init() {
        this._super(...arguments);
        //console.log("child-two");
        // this.setRandomNumber = this.setRandomNumber.bind(this);
    },

})