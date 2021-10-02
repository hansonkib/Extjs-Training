Ext.define('TrainingApp.store.Students',{
    extend: 'Ext.data.Store',
    alias: 'store.students',
    model:'TrainingApp.model.Student',
    proxy: {
        type: 'ajax', //rest,json
        url:'/resources/data.json',
        reader:{
            type: 'json',
            rootProperty:'students'
        }
    },
    autoLoad:true
});