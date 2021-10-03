Ext.define('TrainingApp.view.posts.PostView',{
    extend: 'Ext.grid.Panel',
    xtype: 'postview',
    controller: 'postviewcontroller',
    title: 'Posts',
    store:{
        type: 'posts'
    },
    columns:[
        { 
            text:'userId',
            dataIndex:'userId',
        },
        { 
            text:'id',
            dataIndex:'id'
        },
        {
             text:'title',
             dataIndex:'title',
             flex:2
        },
        { 
            text:'body',
            dataIndex:'body',
            flex:3
        }
    ]
})