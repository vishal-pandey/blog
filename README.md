# Blog platform in Angular with WordPress api

## Steps to use this for your own wordpress blog or for any change
* Fork and clone this repository
* change the variable  **apiUrl = “https://wordpress.vishalpandey.xyz/“;** in [blog/src/app/services/blog.service.ts](https://github.com/vishal-pandey/blog/blob/master/src/app/services/blog.service.ts) with your WordPress blog homepage url.
* Run the command **$ npm install** (to install the dependencies)
* Then run the command **$ npm run build:prod** (to build the project)
* Then run **$ npm run server** (to run the server the local server at http://localhost:9090 )
* Open your browser and open [http://localhost:9090](http://localhost:9090)
* !! Hurray !! you have successfully build your WordPress blog with angular
