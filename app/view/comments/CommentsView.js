Ext.define('TrainingApp.view.CommentsView',{
    extend: 'Ext.grid.Panel',
    xtype: 'commentsview',
    controller: 'commentsviewcontroller',
    title: 'Comments',
    store:{
        type: 'comments'
    },
    columns:[
        { text:'post Id', dataIndex:'postId'},
        { text:'id',dataIndex:'id'},
        { text:'name',dataIndex:'name',flex:2},
        { text:'email',dataIndex:'email',flex:2},
        { text:'body',dataIndex:'body',flex:3},
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
            tooltip: 'Add new comment',
            handler: 'onAddnew'
        },
        {
            text: 'Details',
            tooltip: 'View comments details',
            handler: 'onViewDetails'
        },
        {
            text: 'Delete',
            tooltip: 'Delete comment',
            handler: 'onDeleteComment'
        },
        { 
            text: 'Refresh',
            tooltip: 'refresh data',
            handler: 'onRefresh'
        }
    ],
    selModel:
    {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: [
        {
            xtype: 'pagingtoolbar',
            displayInfo:true
        }
    ]
});