Ext.define('TrainingApp.model.Comment',{
    extend: 'Ext.data.Model',
    fields: [
        {name:'postId',type:'integer'},
        {name:'id',type:'integer'},
        {name:'name',type:'string'},
        {name:'email',type:'string'},
        {name:'body',type:'string'}
    ],
    validators: {
        postId:'presence'
    }
},
function(params){
    console.log("Comments model class was loaded");
}
);