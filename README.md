# NSS-B02-C02-exercise3

## Practice: Accessing Property Values

Given the following object...

```js
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
```

Output the following value to the console.

```text
Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.
```

## Practice

1. Create a new project in the `workspace/javascript/exercises/githubobjects` directory.
1. Create a file named `github_data.js`
1. Copy the contents of [github_data.js](./github_data.js) here in the course to your local file.

Your task it to use your knowledge of accessing property values and array indices to output the commit message for the push event with an id of `8030403992`.

```js
// Start with this
console.log(githubData[?].)
```

> **Helpful hint:** In Visual Studio Code, you can collapse the object in an array when you have the file open.

![collapsing array objects](./images/Y4jYfHibLf.gif)


## What's Next?

You are learning about objects because they are the basic building block of everything you will be creating moving forward. For example, the next couple chapters have you building components to be displayed in the browser, and those will be objects. You will also be storing data on your file system, and then retrieving them for later use. They will be stored as objects.