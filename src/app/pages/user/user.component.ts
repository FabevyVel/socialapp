import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

	 inputObj = {};
	  gender = null; 

    ngOnInit(){

    }
    
     selectedRadioButtonValue


    updateProfile(){
    console.log(this.inputObj);
    }
}
