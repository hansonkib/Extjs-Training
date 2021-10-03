Ext.define('TrainingApp.view.students.StudentsViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentviewcontroller',
    init: function(){
        var studentView = this.getView();
        var stores = studentView.getStore();
        stores.load();
        console.log(studentView);
        console.log(stores);
    }
});