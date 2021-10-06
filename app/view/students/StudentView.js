Ext.define('TrainingApp.view.students.StudentsView',{
    extend: 'Ext.grid.Panel',
    xtype: 'studentsview',
    controller: 'studentviewcontroller',
    title:'students list',
    columnLines: true,
    signTpl: '<span style="' +
            'color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}"' +
        '>{text}</span>',
    store:{
        type: 'students',
        sorters: {
            property: 'name',
            direction: 'DESC'
        }
    },
    columns:[
        { 
            text: 'id',dataIndex:'id',
            sortable: true,
        },
        {
            text: 'message body',
            columns:[
                { 
                    text: 'id',dataIndex:'id',
                    hidden:true,
                    // width:75
                },
                {
                    text: 'name',dataIndex:'name',
                    // width:80
                    // flex:2 //2/6
                },
                { 
                    text: 'regNo',dataIndex:'regNo',
                    // width:75
                    // flex:3 //3/6
                },
                {
                    text: 'county',dataIndex:'county',
                    // width:100
                    // flex: 1 // 1/6
                }
            ],
        },
        {
            text: 'Last Updated',
            dataIndex: 'priceLastChange',
            sortable: true,
            formatter: 'date("m/d/Y")',
            // flex:4
        }
    ],
    tbar:[
        {
            text: 'Add',
            tooltip: 'add new student',
            handler: 'onAddClick'
        },
        {
            text: 'details',
            tooltip: 'view students details',
            handler: 'onDetailsClick'
        },
        {
            text: 'remove',
            tooltip: 'remove student',
            handler: 'onRemoveClick'
        },
        {
            text: 'refresh',
            tooltip: 'refresh',
            handler: 'onRefreshClick'
        }
    ],
    selModel:
    {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    }
    ,
    bbar: [
        {
            xtype: 'pagingtoolbar',
            displayInfo:true
        }
    ]
});