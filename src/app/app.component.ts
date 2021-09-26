import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Player } from 'src/models/Player'
import { IRenderer } from 'src/models/IRenderer';
import { Settings } from 'src/models/Settings';

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

    Settings.mapSize = { width: window.innerWidth, height: window.innerHeight}

    this.map.nativeElement.width = Settings.mapSize.width;
    this.map.nativeElement.height = Settings.mapSize.height;

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