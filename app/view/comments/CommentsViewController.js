Ext.define('TrainingApp.view.comments.CommentsViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.commentsviewcontroller',
    init: function(){
        var commentsView = this.getView();
        var stores = commentsView.getStore();
        stores.load();
        console.log(commentsView);
        console.log(stores);

    }
});