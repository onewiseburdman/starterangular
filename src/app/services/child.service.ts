import { Injectable } from '@angular/core';
import { Child } from '../interfaces/routevariables';

@Injectable()
export class ChildService {
  // Observable rootpathname 
  public child: Child;
}