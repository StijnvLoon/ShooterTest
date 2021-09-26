import { Component, HostListener, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Player } from 'src/models/Player';
import { Settings } from 'src/models/Settings';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  @Input() player: Player

  constructor() {
    fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
      Settings.mousePosition = { y: e.pageY, x: e.pageX }
    })
    fromEvent(document.body, 'mousedown').subscribe((e: MouseEvent) => {
      Settings.mouseDown = true
    })
    fromEvent(document.body, 'mouseup').subscribe((e: MouseEvent) => {
      Settings.mouseDown = false
    })
  }

  ngOnInit(): void {
  }

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 37: {
        this.player.addMovement('left')
        break
      }
      case 38: {
        this.player.addMovement('down')
        break
      }
      case 39: {
        this.player.addMovement('right')
        break
      }
      case 40: {
        this.player.addMovement('up')
        break
      }
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 37: {
        this.player.removeMovement('left')
        break
      }
      case 38: {
        this.player.removeMovement('down')
        break
      }
      case 39: {
        this.player.removeMovement('right')
        break
      }
      case 40: {
        this.player.removeMovement('up')
        break
      }
    }
  }
}
