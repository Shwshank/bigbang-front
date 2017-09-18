import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class ProjectService {

  emmitProjectSummary : EventEmitter<string> = new EventEmitter<string>();

}
