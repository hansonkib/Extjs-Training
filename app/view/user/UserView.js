Ext.define("TrainingApp.view.user.UserView",{
    extend: 'Ext.grid.GridPanel',
    xtype: 'userview',
    controller: 'userviewcontroller',

    store: {
        type: 'users'
    },
    title: 'Users',
    selModel: 'checkboxmodel',
    columns: [{
        text: '#',
        dataIndex: 'id'
    },
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Company Name',
            dataIndex: 'companyName'
        },

    ],
    tbar: [{
        text:'add',
        tooltip:'Add new User',
        handler: 'onAddnewUser'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});