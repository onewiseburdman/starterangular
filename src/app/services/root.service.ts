import { Injectable } from '@angular/core';
import { Root } from '../interfaces/routevariables';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  
  // Observable rootpathname 
  public root: Root;
}