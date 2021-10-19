Ext.define('TrainingApp.view.posts.PostForm',{
    extend: 'Ext.form.FormPanel',

    requires: [
        'TrainingApp.view.posts.PostFormController',
        'TrainingApp.view.posts.PostFormModel'
    ],

    controller: 'posts-postform',
    viewModel: {
        type: 'posts-postform'
    },

    html: 'Hello, World!!'
});