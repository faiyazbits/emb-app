/* eslint-disable no-unused-vars */
import Component from '@ember/component';
import {computed} from '@ember/object';
//import {inject as service} from '@ember/service';



export default Component.extend({
    randomNumber:null,

    transformedRandomNumberInParent: computed('randomNumber', function (){
        return `transformedRandomNumberParent ${this.get('randomNumber')}`

    }),

    init(){
        this._super(...arguments);
        //this.setRandomNumber = this.setRandomNumber.bind(this);
    },

actions: {
    setRandomNumber(randomNumber){
        this.set('randomNumber',randomNumber)
    },
}


})
    