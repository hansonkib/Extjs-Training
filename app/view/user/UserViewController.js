Extend.define('TrainingApp.view.user.UserViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.userviewcontroller',
    onAddClick: function(){
        TrainingApp.util.Util.log("Button clicked")
    }
});