Ext.define("TrainingApp.view.user.UserView",{
    extend: 'Ext.grid.Panel',
    xtype:'userview',
    controller: 'userviewcontroller',
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
        {text: 'Add',
          tooltip: 'add new user',
          handler: 'onAddClick'
    },
        {text: 'details',
        tooltip: 'view user details'
    },
        {text: 'remove',
        tooltip: 'delete user'
    }
    ]
});