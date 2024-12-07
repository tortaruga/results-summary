# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

My main goal with this project was to practice get the layout as close as possible as fast as possible, given that it's simple enough. I also used it as opportunity to practice sass.


### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-result-summary-component-using-sass-E5BgsH5kuw](https://www.frontendmentor.io/solutions/responsive-result-summary-component-using-sass-E5BgsH5kuw)
- Live Site URL: [https://tortaruga.github.io/results-summary/](https://tortaruga.github.io/results-summary/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Sass

### What I learned

I learned a bit about functions in Sass, as well as the math.div() feature: 

```
@function px-to-rem($px) {
    @return math.div($px, 16) * 1rem;
}
```

i also learned that you can use rgba($color, $alpha) to get the desired transparecy level from a color:

```
@mixin category-colors($color) {
    color: $color;
    background-color: rgba($color: $color, $alpha: .05);
}
```

in JS, i learned how to use a json file, although i'm still not familiar with the concepts of async functions or fetch:

```
async function fillData() {
    const request = new Request('./data.json'); 
  
    const response = await fetch(request);
    const data = await response.json();  
}
```

### Continued development

i want to focus on studying async functions, learn more about sass features, and improving my ability to guess sizes of elements from the design.

## Author

- Frontend Mentor - [@tortaruga](https://www.frontendmentor.io/profile/tortaruga)
