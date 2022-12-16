import Component from '@ember/component';
import {computed} from '@ember/object';
//import {inject as service} from '@ember/service';



export default Component.extend({
    PublicChildApi:null,
    randomNumber:null,
    

    transformedRandomNumberInParent: computed('randomNumber', function (){
        return `transformedParentRandomNumber ${this.get('randomNumber')}`

    }),

    init(){
        this._super(...arguments);
        this.setPublicChildApi = this.setPublicChildApi.bind(this);
        //console.log('parent')
    },

    setPublicChildApi(api){
        this.set('PublicChildApi',api)
    },

    actions:{
        
        random(){
            const randomNumber = Math.random();
            this.set('randomNumber', randomNumber);
            const PublicChildApi = this.get('PublicChildApi')
            PublicChildApi.setRandomNumber(randomNumber)
        }
        
    }
    // random(){
    //     const randomNumber = Math.random();
    //     this.set('randomNumber', randomNumber);
    //     this.get('randomnumberinparent')(randomNumber)

    // }




})