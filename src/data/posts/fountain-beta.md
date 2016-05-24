Today, we're proud to announce that we open the beta version of the Yeoman Fountain generators.

Basically, it's a new, state of the art, Yeoman generator. It's also, to our knowledge, the most ambitious one as it's not a generator for one technology stack but perhaps one to rule them all. More seriously, one for any webapp with the most popular frameworks and tools.

Using this generator, you'll be asked several, very structuring, questions: the Web framework you want to use, the module management, the JS and CSS preprocessors you want.

Our goal is for you to be able from a single entry point to start any Web project. That you could have the confidence that whatever the technologies you want to start with, you can count on the best, the cleanest, and the most efficient starter project.

## Main focuses

### Options
Fountain is a new Yeoman generator allowing you to choose the most structuring technologies you'll use:
- Web framework

  That's a key point of Fountain, you can choose either Angular 1, 2 or React and we'll provide you a starter app with this framework. And we really mean an adapted project with dev tools and test environment for the framework you chose.

- Module and dependency management

  This is certainly the second most structuring choice you have to do when you start a Webapp these days. Webpack, SystemJS, any of them? And believe us, this choice pulls a lot of tooling and configurations to make. Fountain provides this simple choice and configure your project following it.

- JavaScript version

  It's became rare to start a webapp in pure browser compatible JavaScript. Everyone is about Babel or TypeScript but this needs tooling.

- Style (CSS) meta-language

  The oldest preprocessors area. You just have to choose Sass or Less (or nothing).

### Developer eXperience

The proposed tooling is focused on offering the best developer experience. The extremly dynamic ecosystem of the modern Web development has to be an asset instead of creating fatigue.

Whatever the options you choose, you'll get a development server embedded, live reload enabled, even hot module reload when possible.

Of course, for delivering, you still have the optimization task to produce a state of the art optimized dist version.

### Ready to go

The main point of Fountain is to deliver a stable project whatever the very different options you could choose and always keep up to date with latest versions of every frameworks and tools.

### Composition

From the user point of view, Fountain is a very complete generator. From the inside, it's a full ecosystem of various and specialized generators. This architecture will allow easier development and extension.

## For the gulp-angular users

We've always seen Fountain as the gulp-angular 2.0. As Angular 1 and Bower were less and less popular we didn't want to remove them but to make an option of them.

But asking if you want one router or another in an Angular app is not as difficult as completly switching frameworks. So, we needed a better architecture and decided to create a whole new project instead of doing an evolution.

At the point of choosing for a reboot project, we had the freedom of redefining our major goals. Some are the same as before like providing clean projects, following best practices and good test coverage. Others changed as we focused on structuring options in place of many smaller ones. The generated projects are also smaller as we discovered that our users were often more scared than helped receiving a big example project.

Our goal is not to completely drop maintainance of gulp-angular for now. But we must admit that putting our efforts on Fountain for several months now doesn't allow us to do much. In addition, when you see your next project as exciting as this one, of course it's difficult to focus on the old one. We recomand to all our users to use Fountain for now on. We'll still try to keep a bit of support through issues but of course all community support will be welcomed.

Oh, and expect a GitHub repository migration from Swiip/generator-gulp-angular to FountainJS/generator-gulp-angular at some point.

## What's next

### Feedbacks

For a start, we hope to have feedbacks on this release. We seriously have started big integration tests involving testing each option combination and running end to end tests with Selenium (Thanks a lot to Travis and Saucelabs free Open Source plans). But still, it's not covering all situations : different operating systems, all browsers and so on.

### Codelab

We're writing a Codelab to get started. We hope you'll enjoy it.

### TodoMVC

You'll see that we already have, for the most common options combination, the possibility to generate a fully working TodoMVC app instead of the common Fountain welcome page.

We intend to generalize that idea and offer a TodoMVC app as a generic option.

### More generators

We design Fountain to be extensible. We intend to use that in the future to address some important technologies or sectors we don't address for now:
- Isomorphic / Universal apps
- Full stack projects (Node, PHP, Java...)
- Mobile (Ionic, React Native / NativeScript...)

### Component generators

That's a very old story. It has been one of the first issues of gulp-angular and it is still not closed.

We still don't offer component generators of sub generators to create some code after the first project generation.

To be honest, we don't use that kind of things ourselves and we always had others plans or ideas which motivate us more.

Still, it's a wanted feature and a part of the Yeoman spirit we want to follow so, at some point, we will stop other plans and meet the demand.
