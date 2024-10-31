# Lab: Storing Data in the Browser
## Getting Started
The starter code provided contains a simple todo application. The goal of this exercise is to update the provided code to use localStorage in order to persist/store data in the browser.

Please download the [starter code](https://api.brainstation.io/content/link/1-04SVwbN6pFsX8EdvZImMQs31ZSuTXpr?instanceId=7048) here.

Instructions
App.jsx contains a component which includes:

- a form used to update a `todoItems` array in state
- a button to change the `theme` in state.



Start by installing dependencies using `npm i`, then run the project.

Next, open `App.jsx`, in the src folder, and review the existing code. There are comments throughout App.jsx describing what needs to be added.

When the application loads and useEffect runs in App.jsx, you can check to see if localStorage is set. If there is data stored in localStorage, then try to update state using `setTodoItems()` and `setTheme()`.

You may need to review how to use:
- `localStorage.getItem()`
- `localStorage.setItem()`
- `JSON.parse()`
- `JSON.stringify()`


### Resources
- [MDN localStorage documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN JSON.stringify() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN JSON.parse() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
