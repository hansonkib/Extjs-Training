Ext.define('TrainingApp.model.Student',{
    extend: 'Ext.data.Model',
    fields: [
        {
            name:'id',
            type:'integer'
         },
         {
            name:'name',
            type:'string'
         },
         {
            name:'regNo',
            type:'string'
         },
         {
            name:'county',
            type:'string'
         },
         { name: 'priceLastChange',
           type: 'date',
           dateFormat: 'm d Y', 
        //    dateReadFormat: 'n/j' 
        },
    ],
    validators:{
        regNo:'presence'
    }
},
function(params){
    console.log("student class model was loaded")
}
)