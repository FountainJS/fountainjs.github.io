Being able to run JavaScript app on server side in Node is a really breaking changes in the world of JavaScript webapp development. React server side rendering capability offering to be able to both render the page on the server, and launch the same webapp code on top of the already prepared markup is trully amazing. It allows JavaScript webapp to finally answer to its biggest weaknesses: time to first render and search engine optimization.

But to my point of view, we're not through discovering all the possibilities that playing with our frontend JavaScript code on the server side can bring. I think this can be one new which I modestly call "Isomorphic pre-rendering" :)

## Fountain website dilemna

After this very philosophical introduction, let's talk about a very pragmatic and Fountain linked problem which was the creation of the website.

The website is (for now) pretty simple, it basically present a bunch of Markdown documentation files like any other Open Source project website. So we imagined some kind of prerendering to spare the hosting of a backend. A push on GitHub pages was both simpler and free.

The most popular solution for pre-rendering is Jekyll. It's integrated in GitHub pages and the technology of choice of our biggest example like yeoman.io or geteslint.io. But to be honest, we don't know much of Jekyll, don't use ruby and...

We publish a technology to start webapps and we wanted to use Fountain to make the Fountain website! But even if we're not a big commercial corporation, we still hoped to have a bit of SEO. So SEO is broken by Fountain if we do a standard JS webapp and the no backend / prerendering goal is broken if we go for server side rendering.

## Isomorphic pre-rendering

The idea is to simply take the best of the two worlds: isomorphic webapps and pre-rendered website.

If we can gather all the routes of our application, then, it must be possible to render the all server side and make our own pre generation process.

After that all html generated files can contains its markup and the script tag to load the JS app and start working on the client.

As an output, we've got an almost standard webapp developed with all the technologies we love which is transformed by a single Gulp tasks in a static website with all content ready and become a fully featured JS webapp as soon as the client load the JS. All of that without the need of any backend, only a static HTTP server.

## fountainjs.github.io

The fountainjs.github.io repository is a real world working example. It starts wit a Fountain generated project using React and Webpack. I added Redux because you know... it's cool and it will help server side rendering.

The whole prerender script is located in the `prerender` folder. The `render.js` file contains what it takes to make the rendering of a page, this part is exactly the same as in an common isomorphic app. `list-pathts.js` is where all the routes are gathered, I must admit it requires some specific code of the app. `index.js` finally loop over each routes and ask for rendering. It's nothing more than that.

The last step is to wire the prerendering in the build task which is done in the `gulpfile.js` and ask Travis to run and publish it on every commit on master though the `.travis.yml`.
