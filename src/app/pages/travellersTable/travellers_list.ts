import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Subject, Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

declare interface Person {
         id: number;
  firstName: string;
   lastName: string;
}

interface TravellersListObject {
    results: Person[]
}

@Component({
    selector: 'travellers-table',
    moduleId: module.id,
    templateUrl: 'travellers_list.html'
})


export class TravellersList implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
    persons: Person[] = [];
    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    dtTrigger: Subject<any> = new Subject<any>();

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 15
      };

      this.getConfigResponse()
        .subscribe(persons => {
          this.persons = persons.body.results;
          // Calling the DT trigger to manually render the table
          console.log(this.dtTrigger, 'this.dtTrigger');
          this.dtTrigger.next();
        });
    }

    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

    getConfigResponse(): Observable<any | HttpResponse<TravellersListObject>> {
      return this.http.get<TravellersListObject>(
        'assets/data/data.json', { observe: 'response' }).pipe(map(res=>{
          return res;
      }))
    }
 //
 // enabledEditMethod(e) {
 //    this.enableEdit = true;
 //    console.log(e);
 //  }
}

