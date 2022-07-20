import { Component } from '@angular/core';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation } from './../animations';
import { animate, animateChild, animation, group, keyframes, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[
    trigger("todosAnimation",[
        transition(":enter",[
            group([
                query("h1", [
                    style({transform:"translateY(-20px)"}),
                    animate(2000)
                ]),
                query("@todoAnimation", stagger(200, animateChild()) )
            ])
        ])
    ]),
    trigger('todoAnimation', [
        transition(":enter", [
            useAnimation(fadeInAnimation, {params:{duration:'2s', easing: 'ease-out'}})
        ]),
        transition (":leave", [
            style({backgroundColor:"red"}),
            animate(1000),
            useAnimation(bounceOutLeftAnimation)
        ]),
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event : any){
    console.log($event);
  }
  animationDone($event : any){
    console.log($event);
  }
}
