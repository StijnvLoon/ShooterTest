import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Drawable } from 'src/models/shapes/Drawable'
import { Player } from 'src/models/Player'
import { Enemy } from 'src/models/Enemy'
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs'
import { IRenderer } from 'src/models/IRenderer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) map: ElementRef<HTMLCanvasElement>

  private context: CanvasRenderingContext2D
  private objects: IRenderer[] = []
  public player: Player = new Player()
  // private enemy: Enemy = new Enemy(0, 0)

  constructor() {
    this.objects.push(
      this.player,
    )
  }

  ngAfterViewInit() {
    this.context = this.map.nativeElement.getContext('2d');

    this.map.nativeElement.width = window.innerWidth;
    this.map.nativeElement.height = window.innerHeight;

    setInterval(() => {
      this.draw()
    }, 1)

  }

  draw() {
    //clear all
    this.context.clearRect(0, 0, this.map.nativeElement.width, this.map.nativeElement.height)

    //update objects
    this.objects.forEach(object => object.update())

    //render objects again
    this.objects.forEach(object => object.render(this.context))
  }

}
