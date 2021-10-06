Ext.define('TrainingApp.store.Posts',{
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'TrainingApp.model.Post',
    proxy: {
        type: 'rest',
        url:'http://localhost:3000/posts',
        reader: {
            type: 'json',
            rootProperty: 'posts',
            totalProperty: 'totalCount'
        }
    },
    convert:function(v,j){
        return new Date(v.replace(/\/Date((\d+))\//, '$1'));
    },
    pageSize:10,
    autoLoad:true
});