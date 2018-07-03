import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { switchMap } from 'rxjs/operators';
import { Title }     from '@angular/platform-browser';
declare var window: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,
  private bS:BlogService,
  private titleService: Title ) { }

  loading:boolean = true;
  post:any;
  refresh:boolean = true;
  fb = `<div class="fb-comments"></div>`;

  ngOnInit() {
    let slug = this.route.paramMap.subscribe((r:any)=>{
      this.loading = true;
    	this.bS.getBlog(r.params.id).subscribe((r:any)=>{
        this.post = r[0];
        this.loading = false;
        this.titleService.setTitle(this.post.title.rendered + " -- Blog | Vishal Pandey");
        this.refresh = false;
        window.FB.XFBML.parse();
        console.log(r[0]);
    	})
    })
  }

}
