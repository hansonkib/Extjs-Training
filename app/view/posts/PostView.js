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
        },
        {
            text: 'Last Updated',
            dataIndex: 'dateUpdated',
            sortable: true,
            formatter: 'date("m-d-Y")',
            // flex:4
        }
    ],
    tbar:[
        {
            text: 'new',
            tooltip: 'new Post',
            handler: 'onAddNewPost'
        },
        {
            text: 'Delete',
            tooltip:'Delete post',
            handler: 'onDeletePost'
        },
        {
            text: 'Details',
            tooltip: 'post Details',
            handler: 'onDetailsClick'
        },
        {
            text: 'Refresh',
            tooltip: 'refresh',
            handler: 'onRefresh'
        }
    ]
})