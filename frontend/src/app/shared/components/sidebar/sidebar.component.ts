import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarLayout } from 'src/app/core/types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  SidebarLayout = SidebarLayout;
  @Input() title!: string;
  @Output() sidebarCollapsed: EventEmitter<boolean> = new EventEmitter();
  currentLayout: SidebarLayout = SidebarLayout.Chats; // default layout

  constructor() { }

  ngOnInit(): void {
  }

  setLayout(layout: SidebarLayout) {
    this.currentLayout = layout;
  }

  onCollapse() {
    this.sidebarCollapsed.emit(true);
  }

}
