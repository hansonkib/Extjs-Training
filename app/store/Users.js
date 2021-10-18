Ext.define('TrainingApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'TrainingApp.model.User',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/users',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'totalCount'
        }
    },
    autoLoad: true,
    pageSize: 1,


});