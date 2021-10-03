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
            hidden:true // remaining width
        },
        {
            text: 'name',dataIndex:'name',
            flex:2 //2/6
        },
        { 
            text: 'regNo',dataIndex:'regNo',
            flex:3 //3/6
        },
        {
            text: 'county',dataIndex:'county',
            flex: 1 // 1/6
        }
    ]
})