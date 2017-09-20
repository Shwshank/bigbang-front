import { EventEmitter, Injectable, } from '@angular/core';

@Injectable()
export class ProjectService {

  emmitProjectSummary :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputData :  EventEmitter<any> = new EventEmitter<any>();        // emmits input JSON data from dialog to form component

}
