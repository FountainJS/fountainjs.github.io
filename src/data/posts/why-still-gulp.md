The need for Web tooling is a more pressing matter today than ever. Everybody now wants to use Sass, Babel, ES2015 modules and livereload everything (if you don’t, you should!). But that requires to process every file you write and then, good tooling.

At the same time, common tools like Grunt, Gulp and Webpack are criticized because they don’t solve all problems and are still hard to use. The Web & JS community face a common problem existing on every plateform : the build. Scripts, conventions, configurations, everyone wants the same thing on the paper, but not so much when we look deeper.

Sure, I have an opinion, but I’ll try to make an honest case for the tool I prefer.

## Gulp over Grunt

The first JS task manager which appeared is Grunt. Its low-level approach and vast plugin library allowed it to grow very fast. Its weakness, in my opinion, is on the configuration side. With Grunt, you configure plugins which do the job. But build is a complex topic. That implies that you will need a lot of plugins to perform what you want. But each one of them will need a piece of json and your configuration file will then grow and grow. You’ll end up with an entire app written in json and that’s not what you want. JSON is a declarative and not ordered format, you can’t express clearly a complex process with it.

Gulp is low-level in the same way, but it focuses on code over configuration. If your build code grows, it will simply become a Node.js app, and that’s way better to maintain : you can modularize, debug, test ... Also, a plugin is not a task with Gulp. It’s more specific: it’s a stream transformation. You can use a Gulp plugin when you need to transform a file and standard JS code when you want anything else.

## Gulp over NPM

Lots of minimalist developers advise to use NPM in place of both Gulp or Grunt these days. For those who don’t know, [NPM has a minimalist script management configuration](https://docs.npmjs.com/misc/scripts) through its package.json file. It allows developers to configure common commands for the project. As every tool now have a command line interface, just make good list of commands and your project is ready to go!

I can understand the simplicity of not adding a tool, learning a new API ... But I’m still convinced that CLI is not very user-friendly. Command lines with more than 5 parameters are seriously not sexy. Gulp in its most minimalist form is just a task management of Node functions. It’s so much simpler for me to write a bit of JS than an obscure command line. In the end, taking advantage of the stream features is really up to you.

## Gulp over or with Webpack

Webpack is both the most loved and hated web tool right now. It’s really powerful and efficient. It has very advanced features like [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) which is a real revolution. It enables to import CSS files from your JS and much more. Other tools like Browserify or SystemJS have some of these features, but not all.

So why is it also so hated? Partly because the GitHub support is not the best but also I think because once again, the build is summed up by a big JSON configuration. All needs, dev, optimization, JS, styles are in a big JSON file. As if build is only about pointing the source folder...

With Gulp, you code your own build processes and most of the time there is a need for such specific processes. Webpack contains transformation streams inside the black box. Gulp exposes the stream process to be able to tune it precisely.

But Gulp can’t replace Webpack in every way. A level of cohabitation has to be found. I recommend keeping the task management in Gulp and launch Webpack through its Node API.

## Gulp 4 over Gulp 3

Gulp has also weaknesses for sure. But most of them are corrected in the new Gulp 4 version. Apart from the fact that it’s been in alpha for almost a year, we could hope to have a release soon as the main blocker issues are solved.

The main problem was about the tasks sequencer which didn’t allow to precisely configure which tasks are dependent on others and how to have some tasks in parallel. In Gulp 4, this is a distant memory as you have a simple composable API : `gulp.series` to sequence tasks and `gulp.parallel` to run them in parallel.

Also, the error management of Gulp 3 was tricky. Stream transformations failing didn’t necessarily stop the stream and not necessarily cause the task to respond by a failure which was a nightmare to plug Gulp in a CI system. This too has been fixed.

## FountainJS

It’s with these ideas in mind that following generator-gulp-angular and designing FountainJS, I chose to keep Gulp as the main task organizer. I found inspiration in other seed projects: some were using Gulp, others only Webpack, NPM scripts or even pure Node code.

With a good design, using Gulp streams when needed and letting the task management part to launch other tools with Node API (Webpack and Karma for example), I think Gulp 4 is still the tool to go for.
