import { Component, OnInit } from '@angular/core';
import { CLASSES } from '../mockclass';
import { newClass } from '../newclass';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  newclass = CLASSES;
  showclassroom = false;
  constructor() { }
  onClickClassroom(){
    this.showclassroom = true;
  }
  ngOnInit() {
  }

}
