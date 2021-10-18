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
    tbar: [
        {
            text: 'Border layout',
            tooltip: 'Border layout',
            handler: 'onBorderLayout'
        },
        {
            text: 'VBox layout',
            tooltip: 'Border layout',
            handler: 'onVboxLayout'
        },
        {
            text: 'Form layout',
            tooltip: 'form layout',
            handler: 'onFormLayout'
        },
        {
            text: 'According Layout',
            tooltip: 'Accordion Layout',
            handler: 'onAccordionLayout'
        },
        {
        text:'add',
        tooltip:'Add new User',
        handler: 'onAddnewUser'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});