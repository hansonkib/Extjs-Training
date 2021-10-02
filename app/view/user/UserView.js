Ext.define("TrainingApp.view.user.UserView",{
    extend: 'Ext.grid.Panel',
    xtype:'userview',
    title: 'users',
    selModel:'checkboxmodel',
    store:{
        type:'users'
    },
    columns:[
        { text:'id',dataIndex:'id' },
        { text:'first',dataIndex:'first' },
        { text:'last',dataIndex:'last' },
        { text:'handle',dataIndex:'handle' }
    ],
    tbar: [
        {text: 'Add'},
        {text: 'details'},
        {text: 'remove'}
    ]
});