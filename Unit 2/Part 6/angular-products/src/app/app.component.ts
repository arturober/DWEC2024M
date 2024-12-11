import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimation', [
      transition('productsPage => productDetail', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(100%)' })),
        group([
          query(':leave', [
            group([
              animate('0.5s', style({ transform: 'translateX(-100%)' })),
              animate('0.4s', style({ opacity: 0 }))
            ])
          ]),
          query(':enter', [animate('0.5s', style({ transform: 'none' }))]),
        ]),
      ]),
      transition('productDetail => productsPage', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        group([
          query(':leave', [
            group([
              animate('0.5s', style({ transform: 'translateX(100%)' })),
              animate('0.3s', style({ opacity: 0 }))
            ])
          ]),
          query(':enter', [animate('0.5s', style({ transform: 'none' }))]),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Angular Products';

  getState(routerOutlet: RouterOutlet) {
    return routerOutlet.activatedRouteData['animation'] ?? 'None';
  }
}
