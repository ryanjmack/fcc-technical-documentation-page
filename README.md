# freeCodeCamp Landing Page Project

## Synopsis

This is a project based off of freeCodeCamp's Responsive Web Design: 'Technical Documentation Page' project.

## Code Example

You can check it out [here](https://ryanjmack.github.io/fcc-technical-documentation/)!

## Motivation

This is a continuation of the projects for the Responsive Web Design Curriculum at freeCodeCamp. This was made responsive using just CSS with *no* libraries or frameworks.

This project was much easier to develop than my last project (fcc-landing-page) for the sole fact that I had gulp set up. That was very time consuming, and since I used left my gulp tasks virtually untouched

#### High points of my projects:

* My scss was much more modular and logical, thanks to BEM conventions. This made it so there was no specificity problems. Almost all of my styles were used on classes.

* Flexbox is amazing... After finishing the course [*What the Flexbox?!*](https://flexbox.io/), creating a responsive layout was much easier. Manipulating flex-grow, flex-shrink, flex-basis and flex-direction made it super easy to get things to take up the proper amount of space. I also learned about some interesting things about flexbox. For example flex-items have a style rule `min-width: auto`, which means that unless min-width is overwritten with a value of 0 flex-items won't shrink.

* Using em/rem in projects are also amazing. It's really not that hard to get used to, and I love how with a simple rule change (e.g.

      html {
        font-size: 150%;
      }
), will scale everything (padding, margin, font-sizes etc.) on your page perfectly.

#### Other thoughts

* As always my code could be cleaner, better organized etc. It is much, much better than my last project (and the scope of this project is also much larger). I wouldn't beat myself up over it, but it's still a learning process. As projects become more complex I can see the weaknesses in how I did things. My next project will be even better in this regard.

* I'm very happy with the way that I've been progressing!



## Acknowledgements

[MDN](https://developer.mozilla.org/en-US/) is my favorite site for documentation. Everything about their docs are top notch in my opinion and that is why I cloned one of their pages for this project. Credit goes to them and their contributors for the content and documentation!

[Wes Bos](http://wesbos.com/) is probably my favorite teacher. He has some awesome content and I credit a lot of my growth to him!
