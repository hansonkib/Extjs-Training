/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TrainingApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TrainingApp.view.main.MainController',
        'TrainingApp.view.main.MainModel',
        'TrainingApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items:[
            {
                xtype: 'userview'
            }
        ]
        // bind: {
        //     html: '{loremIpsum}'
        // }
    }, {
        title: 'Students',
        iconCls: 'fa-users',
        items: [
            { 
                xtype: 'studentsview',
                reference: 'studentview'
            }
        ]
        // bind: {
        //     html: '{loremIpsum}'
        // }
    }, {
        title: 'Posts',
        iconCls: 'fa-cog',
        items: [
            {
                xtype: 'postview'
            }
        ]
        // bind: {
        //     html: '{loremIpsum}'
        // }
    },
    { 
        title: 'Comments',
        iconCls: 'fa-cog',
        items: [
            {
                xtype: 'commentsview'
            }
        ]
    },
    { 
        title: 'Form HBox layout',
        // iconCls: 'fa-cog',
        items: [
            {
                xtype: 'form-hboxlayout'
            }
        ]
    },
    { 
        title: 'column layout form',
        // iconCls: 'fa-cog',
        items: [
            {
                xtype: 'form-multicolumn',
            }
        ]
    },
    { 
        title: 'Accordion Layout layout',
        // iconCls: 'fa-cog',
        items: [
            {
                xtype: 'accordionlayout',
            }
        ]
    },
]
});
