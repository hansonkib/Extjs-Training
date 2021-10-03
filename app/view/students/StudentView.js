Ext.define('TrainingApp.view.students.StudentsView',{
    extend: 'Ext.grid.Panel',
    xtype: 'studentsview',
    controller: 'studentviewcontroller',
    title:'students list',
    store:{
        type: 'students'
    },
    columns:[
        { 
            text: 'id',dataIndex:'id',
            flex:1,
            hidden:true
        },
        {
            text: 'name',dataIndex:'name',
            flex:3
        },
        { 
            text: 'regNo',dataIndex:'regNo',
            flex:4
        },
        {
            text: 'county',dataIndex:'county'
        }
    ]
})