import { Injectable } from '@angular/core';
import { Parent } from '../interfaces/routevariables';

@Injectable()
export class ParentService {
  // Observable rootpathname 
  public parent: Parent;
}