import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    this.equipment.push(equipmentName);
  }

  remove(equipmentName: string) {
    let index = this.equipment.indexOf(equipmentName);
    this.equipment.splice(index, 1);
  }

  edit(equipmentName: string) {
    this.itemBeingEdited = equipmentName;
  }

  save(equipmentName: string) {
    equipmentName = equipmentName;
    this.itemBeingEdited = null;
  }
}
