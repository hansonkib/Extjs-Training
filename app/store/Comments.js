Ext.define('TrainingApp.store.Comments',{
    extend: 'Ext.data.Store',
    alias: 'store.comments',
    storeId: 'comments',
    model: 'TrainingApp.model.Comment',
    proxy: {
        type: 'rest',
        url:'http://localhost:3000/comments',
        reader: {
            type: 'json',
            rootProperty: 'comments'
        }
    },
    pageSize:10,
    autoLoad:true
})