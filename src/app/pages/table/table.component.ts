import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
   public tableData1: TableData;
    public tableData2: TableData;
    enableEdit = false;
  enableEditIndex = null;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'S.No', 'First Name', 'Last Name', 'Area', 'Contact No', 'Current Status'],
            dataRows: [
               ['1', 'Arun', 'Raja', 'Chennimalai', '9524568425', 'Negative'],
               ['2', 'Arun', 'Raja', 'Chennimalai', '9524568425', 'Negative'],
               ['3', 'Arun', 'Raja', 'Chennimalai', '9524568425', 'Negative'],
               ['4', 'Arun', 'Raja', 'Chennimalai', '9524568425', 'Negative'],
               ['5', 'Arun', 'Raja', 'Chennimalai', '9524568425', 'Negative'],
               ['6', 'Arun', 'Raja', 'Chennimalai', '9524568425', 'Negative'],
               ['7', 'Arun', 'Raja', 'Chennimalai', '9524568425', 'Negative']             
               
            ]

        };       
    }

 enabledEditMethod(e) {
    this.enableEdit = true;    
    console.log(e);
  }
}

