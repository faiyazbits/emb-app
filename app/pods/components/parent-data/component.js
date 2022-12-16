/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-dupe-keys */
/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import Component from '@ember/component';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';
//import { alias } from '@ember/object/computed';


export default Component.extend({
users:service(),
randomNumber:null,
//users:computed.alias('users.users.id'),
// selectedName: null,
// selectedAge: null,
// employeeUsers :[
//     {
//         id:1,
//         name:"reshma",
//         age:30,
//     },
//     {
//         id:2,
//         name:"francis",
//         age:25,
//     },
//     {
//         id:3,
//         name:"peter",
//         age:30,
//     },
// ] ,  

transformedRandomNumberInParent: computed('randomNumber', function (){
        return `transformedParentRandomNumber ${this.get('randomNumber')}`

    }),


    init() {
        this._super(...arguments);
        console.log('parent-COMPONENT')
        this.setRandomNumbernumber = this.setRandomNumbernumber.bind(this);
        
        const users =this.get('users')
        this.set('users', users);


    },
    setRandomNumbernumber(randomNumber){
        this.set('randomNumber',randomNumber)
    },
   
   actions:{
        // setusers(){
        //     const userList = this.get('users')
        //     this.set('users', userList)
        //     console.log(userList)
        // },

        // selectedName(name) {
        //     this.set('selectedName', name);
        //   },
        //   selectedAge(age) {
        //       this.set('selectedAge', age);
        //     },
        onEmployeeSelected(employee){
            this.set('selectedEmployee',employee)
        }
        // child(){
        //     this._super(...arguments);
        //     console.log('child-comp')
        // },
        // clickMe(){
        //     console.log("clicked")
        // },
        // random(){
        //     const randomNumber = Math.random();
        //     this.set('randomNumber', randomNumber)
        // }
    }
})
