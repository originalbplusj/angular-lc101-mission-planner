import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    this.experiments.push(experimentName);
  }

  remove(experimentName: string) {
    let index = this.experiments.indexOf(experimentName);
    this.experiments.splice(index, 1);
  }

  edit(experimentName: string) {
    this.itemBeingEdited = experimentName;
  }
  save(experimentName: string) {
    experimentName = experimentName;
    this.itemBeingEdited = null;
  }
}
