import Service from '@ember/service';

export default Service.extend({

randomNumber:null,
userList:null,


init() {
    this._super(...arguments);
    
    const data =[
        {
            id:1,
            name:"reshma",
            age:30,
        },
        {
            id:2,
            name:"francis",
            age:25,
        },
        {
            id:3,
            name:"peter",
            age:30,
        },
    ]

this.set('userList',data)
}
  
})


    



  


