import { EventEmitter, Injectable, } from '@angular/core';

@Injectable()
export class ProjectService {

  emmitProjectSummary :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputData :  EventEmitter<any> = new EventEmitter<any>();        // emmits input JSON data from dialog to form component
  emmitInputDataTab1 :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputDataTab2 :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputDataTab3 :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputDataTab4 :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputDataTab5 :  EventEmitter<any> = new EventEmitter<any>();

}
