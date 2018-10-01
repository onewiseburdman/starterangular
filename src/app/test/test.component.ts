import { Input, Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
  @Component({
    selector: 'test1',
    template: `<h1>Hello From Test</h1>`
  })
  export class testComponent {
    test1: any;
    @Input() data: any;

  }

  @Component({
    selector: 'test2',
    template: `<h1>Hello From Test 2</h1>`
  })
  export class test2Component {
    @Input() data: any;

  }

  @Component({
    selector: 'test3',
    template: `<h1>Hello From Test 3</h1>`
  })
  export class test3Component {
    @Input() data: any;

  }
  
  @Component({
    selector: 'test4',
    template: `<h1>Hello From Test 4</h1>`
  })
  export class test4Component {
    @Input() data: any;

  }

  @NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        test2Component,
        test3Component,
        test4Component,
        testComponent
  
    ],
    exports: [
        test2Component,
        test3Component,
        test4Component,
        testComponent
    ],
    entryComponents: [  ],
  
  })
  export class testModule { }
