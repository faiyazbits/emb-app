/* eslint-disable no-console */
/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import Controller from '@ember/controller';

export default Controller.extend({

    id: '',
    firstName: '',
    lastName: '',
    age: '',
    name: '',

   employees: [
        { id: 1, firstName: 'Marie', lastName: 'Curie', age: 30 },
        { id: 2, firstName: 'Mae', lastName: 'Jemison', age: 25 },
        { id: 3, firstName: 'Albert', lastName: 'Hofmann', age: 20 },

    ],

    actions: {
        add(){
            console.log('add')
            const firstName = this.get('firstName');
            const lastName = this.get('lastName');
            const age = this.get('age');
            const employeeDetails = this.get('employees');
            const details = {
                firstName: firstName,
                lastName: lastName,
                age: age,
            }
            employeeDetails.pushObject(details);
            this.set('firstName', 'Alex')
            this.set('lastName', 'John')
            this.set('age', 30)

            console.log(employeeDetails)
            this.set('employees', employeeDetails);
        },
        delete() {
            const employeeDetails = this.get('employees');
            employeeDetails.removeAt(0)
            console.log(employeeDetails)
            this.set('employees',employeeDetails);
        },



    }

});
