import Component from '@ember/component';

export default Component.extend({

init() {
    this._super(...arguments);
    console.log('OUR-COMPONENT')
},
didInsertElement(){

},

willDestroy(){
console.log("training-one destroyed")
},

actions: {
    clickMe(){
        console.log("clicked")
    }

}

});
