Ext.define('TrainingApp.store.Posts',{
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'TrainingApp.model.Post',
    proxy: {
        type: 'rest',
        url:'http://localhost:3000/posts',
        reader: {
            type: 'json',
            rootProperty: 'posts'
        }
    },
    autoLoad:true
});