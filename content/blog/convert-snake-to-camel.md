---
title: "Convert a nested snake_case object to camelCase"
date: "2025-07-02"
---

I was recently interviewed by somebody at a company, and they asked me this question, I'll give you the backstory.

Apparently, their server sends a snake_cased response to the frontend and they hate to have snake_cased response so they decided to turn all their responses to camelCase before sending it to the frontend.

They asked me to write a function which takes this snake_cased object as a parameter and returns a camelCased object.

Let me tell you something, I hate algorithmic interviews, however in this case it seemed like a pretty valid scenario.

So, I have this object as a reference:

```js
const snake = {
  first_name: "John",
  last_name: "Doe",
  address: {
    street_name: "Main St",
    city_name: "Metropolis"
  },
  favorite_colors: [
    { color_name: "red" },
    { color_name: "blue" }
  ]
};
```

And I need to convert that to:

```js
const camel = {
  firstName: "John",
  lastName: "Doe",
  address: {
    streetName: "Main St",
    cityName: "Metropolis"
  },
  favoriteColors: [
    { colorName: "red" },
    { colorName: "blue" }
  ]
};
```

Sounds fair enough.

I started out with a utility function for converting snake_case to camelCase which looks like this and is pretty straight forward if you understand basic javascript.

```js
function toCamelCase(str) {
  return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}
```

Then I move on to writing another function which takes in any datatype and converts that to the required output:

```js
function deepCamelCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepCamelCase);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = toCamelCase(key);
      acc[camelKey] = deepCamelCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}
```

Now, if you look at the above function, I get the root level parent keys first and loop through them.

I store the object in currentObj and delete that key - value after I store an instance of the same.

I create a new key name using the utility function we created above, and setting the response[newKey] with the instance of the deleted object. Which basically means that I just delete the snake_case object and replaced it with camelCase object.

Now, we check if the object has any children, so if the response[newKey] is an object, there might be keys (there might be children) in that object which are still snake_cased so we call a self invoking function (calls itself) with the new object and repeats the process.

This process repeats itself for all the root level nodes one after the other and we return the desired output.

Let me know if you liked this, I will link the codesandbox in here too.

**[View the full code on CodeSandbox](https://codesandbox.io/p/sandbox/javascript-nested-object-snakecase-camelcase-76g9v)**

Thanks for your time.
