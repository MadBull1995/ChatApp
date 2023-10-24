import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private initialX: number = 0;
  private initialWidth: number = 0;
  private maxWidth: number = 500;
  private mouseMoveListener: Function | null = null;
  private mouseUpListener: Function | null = null;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    const sidebar = this.el.nativeElement;
    const rect = sidebar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;

    // Check if clicked within 8 pixels of the right edge
    this.renderer.addClass(this.el.nativeElement, 'hovering');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent): void {
    const sidebar = this.el.nativeElement;
    const rect = sidebar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;

    // Check if clicked within 8 pixels of the right edge
    this.renderer.removeClass(this.el.nativeElement, 'hovering');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    event.preventDefault();  // Prevent default to stop text selection
    event.stopPropagation(); // Stop propagation to prevent any parent handlers from getting notified
    
    const sidebar = this.el.nativeElement;
    const rect = sidebar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;

    // Check if clicked within 8 pixels of the right edge
    if (rect.width - offsetX < 8) {
      this.initialX = event.clientX;
      this.initialWidth = rect.width;
      this.renderer.addClass(this.el.nativeElement, 'dragging');
      this.mouseMoveListener = this.renderer.listen('window', 'mousemove', this.onMouseMove.bind(this));
      this.mouseUpListener = this.renderer.listen('window', 'mouseup', this.onMouseUp.bind(this));
    }
  }

  onMouseMove(event: MouseEvent): void {
    event.preventDefault();  // Prevent default to stop text selection
    event.stopPropagation(); // Stop propagation to prevent any parent handlers from getting notified

    const movementX = event.clientX - this.initialX;
    const newWidth = this.initialWidth + movementX;
    
    if (newWidth <= this.maxWidth) {
      this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
    }
  }

  onMouseUp(): void {
    this.renderer.removeClass(this.el.nativeElement, 'dragging');
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
    if (this.mouseUpListener) {
      this.mouseUpListener();
    }
    if (this.el.nativeElement.releaseCapture) {
      this.el.nativeElement.releaseCapture();
    }
  }
}
