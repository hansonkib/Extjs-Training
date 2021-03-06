Ext.define('TrainingApp.store.Menu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menu',
    storeId: 'menu',

    root: {
        expanded: true,
        children: [{
                text: 'Students',
                expanded: true,
                children: [{
                        text: 'Students',
                        leaf: true,
                        xtype: 'studentview',
                        iconCls: 'fas fa-users',
                    },
                    {
                        text: 'Add User',
                        leaf: true,
                        xtype: 'userform'
                    }
                ]
            },
            {
                text: 'homework',
                expanded: true,
                children: [{
                        text: 'book report',
                        leaf: true
                    },
                    {
                        text: 'algebra',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Posts',
                expanded: true,
                children: []
            }
        ]
    }

});