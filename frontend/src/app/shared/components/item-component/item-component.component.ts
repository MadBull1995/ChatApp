import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  @Input() contactPicture!: string;
  @Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
