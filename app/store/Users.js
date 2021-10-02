Ext.define('TrainingApp.store.Users',{
    extend: 'Ext.data.Store',
    alias: 'store.users',
    fields:[
            {name:'id'},
            {name:'first'},
            {name:'last'},
            {name:'handle'},
        ],
        data: [
            {
            id:1,
            first:'hanson',
            last:'sang',
            handle:'@hansonkib'
            },
            {
                id:2,
                first:'rono',
                last:'sang',
                handle:'@rono'
                }
        ]
})