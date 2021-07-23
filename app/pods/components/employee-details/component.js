import Component from "@ember/component";

export default Component.extend({
    employees: null,
    newName: "",
    newAge: "",
    newSalary: "",
    fullName: "Vinoth Kumar",

    init() {
        this._super(...arguments);
        const employees = [{
                name: "Vinoth Kumar",
                age: 27,
                salary: 10,
            },
            {
                name: "Mohamed Umar",
                age: 26,
                salary: 20,
            },
        ];
        this.set("employees", employees);
        setTimeout(() => {
            this.set("fullName", "Mohamed Umar");
        }, 3000);
    },
    resetAllFieldValue() {
        this.set('newName', '');
        this.set('newAge', '');
        this.set('newSalary', '');
        console.log("its working")
    },

    actions: {
        onAdd() {
            let newEmp = {
                name: this.get("newName"),
                age: this.get("newAge"),
                salary: this.get("newSalary"),
            };
            this.get("employees").pushObject(newEmp);
            this.resetAllFieldValue();
        },
        onNameAdd(e) {
            this.set("newName", e.target.value);
        },
        onAgeAdd(e) {
            this.set("newAge", e.target.value);
        },
        onSalaryAdd(e) {
            this.set("newSalary", e.target.value);
        },
    },
});