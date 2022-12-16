/* eslint-disable no-console */
import Component from '@ember/component';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';


export default Component.extend({
    randomNumber:null,
    users:service(),
    userData:computed.alias('users.userList'),
    selectedEmployee:null,

    transformedRandomNumber: computed('randomNumber', function (){
        return `transformedRandomNumber ${this.get('randomNumber')}`

    }),


    init() {
        this._super(...arguments);
        console.log('parent-COMPONENT')
        this.set('randomNumber', Math.random())
    },


    actions:{
        child(){
            this._super(...arguments);
            console.log('child-comp')
        },
        random(){
            const randomNumber = Math.random();
            this.set('randomNumber', randomNumber);
            this.get('randomnumberinparent')(randomNumber)

        },
        // setusers(){
        //     const userList = this.get('users')
        //     this.set('users', userList)
        //     console.log(userList)
        // },
        onSelectedEmployee(selectedEmployeeId){
            const employee = this.userData.find(employee => employee.id == selectedEmployeeId);
            this.set('selectedEmployee',employee);
            this.onEmployeeSelected(employee)
            

        },

        // selectedName(name) {
        //     this.set('selectedName', name);
        //   },
        //   selectedAge(age) {
        //       this.set('selectedAge', age);
        //     },

        
    }




})