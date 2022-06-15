import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '../Hero';

@Component({
  selector: 'app-capacity-info',
  templateUrl: './capacity-info.component.html',
  styleUrls: ['./capacity-info.component.scss'],
})
export class CapacityInfoComponent implements OnInit {
  @Input() capacity?: Spell;
  toolTypeInfo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.toolTypeInfo = `${this.capacity?.spellKey.toUpperCase()} : ${
      this.capacity?.name
    }`;
  }
}
