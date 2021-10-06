Ext.define('TrainingApp.store.Comments',{
    extend: 'Ext.data.Store',
    alias: 'store.comments',
    model: 'TrainingApp.model.Comment',
    proxy: {
        type: 'rest',
        url:'http://localhost:3000/comments',
        reader: {
            type: 'json',
            rootProperty: 'coments'
        }
    },
    pageSize:10,
    autoLoad:true
})