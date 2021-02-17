import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-all-lessons',
  templateUrl: './all-lessons.component.html',
  styleUrls: ['./all-lessons.component.css']
})
export class AllLessonsComponent implements OnInit {

  constructor(
    private _activeRoute:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe(param=>{
     console.log(param.get('id'));
    //  this._router.navigate([{outlets:{'hello':['lessons',3]}}]);
     this._router.navigate([{ outlets: { 'hello': ['lessons', 2]} }]);
      console.log(param.get('id'));
    });
    // this.activeRoute.snapshot.params.subscribe((data:any)=>{
    //   console.log(data);
    // })
    // console.log('before',this._activeRoute.snapshot.params.id);
    // this._router.navigateByUrl('(hello:lessons/4)');
    // console.log('after',this._activeRoute.snapshot.params.id);
  }

}
