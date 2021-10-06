Ext.define('TrainingApp.model.Post',{
    extend: 'Ext.data.Model',
    fields: [
        {name:'userId',type:'integer'},
        {name:'id',type:'integer'},
        {name:'title',type:'string'},
        {name:'body',type:'string'},
        { name: 'dateUpdated',type: 'date',dateFormat: 'm-d-Y'},
    ],
    validators: {
        userId:'presence'
    }
},
function(params){
    console.log("Post model was loaded")
}
);