Ext.define('TrainingApp.view.students.StudentsView',{
    extend: 'Ext.grid.Panel',
    xtype: 'studentview',
    title:'students list',
    store:{
        type: 'students'
    },
    columns:[
        { 
            text: 'id',dataIndex:'id'
        },
        {
            text: 'name',dataIndex:'name'
        },
        { 
            text: 'regNo',dataIndex:'regNo'
        },
        {
            text: 'county',dataIndex:'county'
        }
    ]
})