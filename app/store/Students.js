Ext.define('TrainingApp.store.Students',{
    extend: 'Ext.data.Store',
    alias: 'store.students',
    model:'TrainingApp.model.Student',
    proxy: {
        type: 'rest', //rest,json
        url:'http://localhost:3000/students',
        reader:{
            type: 'json',
            rootProperty:'students'
        }
    },
    pagesize:2,
    autoLoad:true
});