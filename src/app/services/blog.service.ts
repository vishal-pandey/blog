import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiUrl = "https://wordpress.vishalpandey.xyz/";
  // apiUrl = "http://www.learncodeonline.in/blog/";

  constructor(private http:HttpClient) { 
  	this.http.get(this.apiUrl+"wp-json/wp/v2/posts").subscribe((r:any)=>{
  		console.log(r);
  		this.posts = r;
  	})
    this.http.get(this.apiUrl+"/wp-json/wp/v2/categories").subscribe((r:any)=>{
      console.log(r);
      this.categories = r;
    })
  }

  posts:any;
  categories:any;

  getBlog(slug){
  	return this.http.get(this.apiUrl+"wp-json/wp/v2/posts?slug="+slug);
  }
  

}
