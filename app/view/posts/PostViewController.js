Ext.define('TrainingApp.view.posts.PostViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.postviewcontroller',
    init: function(){
        var postView = this.getView();
        var stores = postView.getStore();
        stores.load();
        console.log(postView);
        console.log(stores);
    }
});