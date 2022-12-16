/* eslint-disable no-console */
/* eslint-disable no-dupe-keys */
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    // disableFirstName: true,
    disableName: true,
    disableSubmitButton: true,
    isSubmitBtnClicked: false,
    firstName: "",
    lastName: "",


    disableSubmitButton: computed('firstName', 'lastName', function () {
        const firstName = this.get('firstName');
        const lastName = this.get('lastName');
        return !(firstName.length >= 6 && lastName.length >= 6)
    }),


    actions: {
        onFill() {
            this.set('disableName', false);
            // this.set('disableLastName', false);
        },

        // onNameChange() {
        //     if (this.firstName.length >= 6 && this.lastName.length >= 6) {
        //         this.set('disableSubmitButton', false);
        //     }
        //     else {
        //         this.set('disableSubmitButton', true);
        //     }
        // },
        onButtonClick() {
            this.set('isSubmitBtnClicked', true);
            console.log(this.firstName, this.lastName)
        }

    }

})
