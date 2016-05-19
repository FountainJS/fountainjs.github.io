Today, we're proud to announce that we open the beta version of the Yeoman Fountain generators.

Basically, it's a new, state of the art, Yeoman generator. It's also, to our knowledge, the most ambitious one as it's not a generator for one technology stack but perhaps one to rules them all. More seriously, one for any webapp with the most popular frameworks and tools.

Using this generator will ask you for several, very structurant, questions: the Web framework you want to use, the module management, the JS and CSS preprocessors you want.

Our goal is for you to be able from a single entry point to start any Web project. That you could have the confidence that whatever the technologies you want to start with, you can count on the best, clean and efficient starter project.

## Main focuses

### Options
Fountain is a new Yeoman generator allowing the user to choose the most structurant technologies you'll use:
- Web framework

  That's a key point of Fountain, you can choose either Angular 1, 2 or React and we'll provide us a starter app with this framework. And we mean a really adapted project with dev tools and test environment for the framework you chose.

- Module and dependency management

  This is certainly the second most structurant choice you have to make starting a Webapp these days. Webpack, SystemJS, any of them ? And believe us, this choice pull a lot of tooling and configurations to make. Fountain provide this simple choice and configure your project following it.

- JavaScript version

  It's became rare to start a webapp in pure browser compatible JavaScript. Everyone is about Babel or TypeScript but this needs tooling. Here you just have to choose.

- Style (CSS) meta-language

  The oldest preprocessors area. You just have to choose Sass or Less (or nothing).

### Developer eXperience

The tooling proposed is focused on offering the best developer experience in order that modern Web development benefits from the extremly dynamic ecosystem instead of creating fatigue.

Whatever the options you choose, you'll get a development server embedded, live reload enabled, even hot module reload when possible.

Of course, for delivering, you still have the optimization task to produce a state of the art optimized dist version.

### Ready to go

The main point of Fountain is to deliver a stable project whatever the very different options that you could choose and always keep up to date with latest versions of every frameworks and tools.

### Composition

From the user point of view, Fountain is a very complete generator. From the inside, it's a complete ecosystem of various and specialized generators. This architecture will allow easier development and extension.

## For the gulp-angular users

We always seen Fountain as the gulp-angular 2.0. As Angular 1 and Bower was less and less popular we wanted not to remove them but to make an option of them.

But asking if you want one router on another in an Angular app is not as difficult as completly switching frameworks. So, we needed a better architecture and that made us decide for a reboot project instead of an evolution.

At the point of choosing for a reboot project, we had the freedom of redefining our major goals. Some are the same as before like providing clean projects, following best practicies and good test coverage. Others changed as we focused on structurant options in place of many smaller ones. The projects offered are also smaller as we discovered that our users was often more scared than helped receiving a big example project.

Our goal is not to completly drop maintainance of gulp-angular for now. But we must admit that putting our efforts on Fountain for several months now doesn't allow us to do much. In addition, when you see your next project as exciting as this one, of course it's difficult to focus on the old one. We recomand to all our users to use Fountain for now on. We'll still keep trying to keep a bit of support through issues but of course all community support will be welcomed.

Oh, and expect a GitHub repository migration from Swiip/generator-gulp-angular to FountainJS/generator-gulp-angular at some point.

## What's next

### Feedbacks

For a start, we hope to have feedbacks on this release. We seriously have started big integration tests involving testing each option combination and running end to end tests with Selenium (Thanks a lot to Travis and Saucelabs free Open Source plans). But still, it's not covering all situations : different operating systems, all browsers ans so on.

### Codelab

We're writing a Codelab to get started. We hope you'll enjoy it.

### TodoMVC

You'll see that we already have, for the most common options combination, the possibility to generate a fully working TodoMVC app instead of the common Fountain welcome page.

We intend to generalize that idea and offers a TodoMVC app as a generic option.

### More generators

We design Fountain to be extensible. We intent to use that in the future to address some important technologies or sector we don't address for now:
- Isomorphic / Univesal apps
- Full stack projects (Node, PHP, Java...)
- Mobile (Ionic, React Native / NativeScript...)

### Component generators

That's a very old story. It has been one of the first issue of gulp-angular and it is still not closed.

We still don't offers component generators of sub generators to create some code after the first project generation.

To be honest, we don't use that kind of things ourselves and we always had others plans or ideas which motivate us more.

Still, it's a wanted feature and a part of the Yeoman spirit we want to follow so, at some point, we will stop other plans and respond to this.
