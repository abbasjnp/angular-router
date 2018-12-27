import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import{Router,ActivatedRoute,ParamMap} from  '@angular/router'
import{switchMap} from 'rxjs/operators'
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 hero$:Observable<Hero>;

  constructor(
      private router:Router,
      private route:ActivatedRoute,
      private service: HeroService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.hero$ = this.service.getHero(id);
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/