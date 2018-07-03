import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public bS:BlogService,
  	private mS:MainService) {
  }

  ngOnInit() {
  }

  limit(str){
  	if (str.length > 40) {
  		return str.slice(0,40)+"...";
  	}else{
  		return str;
  	}
  }

}
