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
        { text:'body',dataIndex:'body',flex:3}
    ]
})