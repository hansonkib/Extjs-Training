Ext.define('TrainingApp.view.comments.CommentsViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.commentsviewcontroller',
    init: function(){
        var commentsView = this.getView();
        var stores = commentsView.getStore();
        stores.load();

    },
    onAddnew: function(){
        Ext.create({
            xtype: 'commentform'
        });
    },
    onViewDetails: function(){
        console.log('details button clicked')
    },
    onDeleteComment: function(){
        console.log('delete clicked')
    },
    onRefresh: function(){
        var me = this,
        grid = me.getView(),
        stores = grid.getStore();
        stores.reload();
    }
});