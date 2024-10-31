import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // theme is a string
  const [theme, setTheme] = useState("light");

  /*
   * For this exercise, try to set and get data from localStorage and
   * use this data to update the todoItems and theme in state
   * You will need to use JSON.parse() to get data from localStorage and convert it to a JS array
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   */
  useEffect(() => {
    // check if localStorage data exists for todo items
    // if localStorage exists, update state with that data

    // Slide 12: Reading Data
    const storedTodoItems = localStorage.getItem("todoItems");
    // dog = [];
    // dog is not a state, so this expression is FALSE
    const dogDNE = localStorage.getItem("dog");
    if (dogDNE) {
      console.log("dog DOES exist");
    } else {
      console.log("dog DOES NOT exist");
    }

    // check if a state exists (this is called 'key' from lecture slides?)
    // todoItems IS a state, it exists, so its true, so enter if statement
    console.log("storedTodoItems ", {
      storedTodoItems,
    });
    if (storedTodoItems) {
      // convert state to object so we can use it
      // Need to convert stringified objects back to proper objects using JSON.parse() before using
      setTodoItems(JSON.parse(storedTodoItems));
    }

    // check if localStorage data exists for theme
    // if localStorage exists, update state with that dataconst storedTodoItems = localStorage.getItem("todoItems");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      // theme is already a string, so don't need to JSON.parse it
      setTheme(storedTheme);
    }
  }, []);

  /*
   * When new items are added try to set localStorage with the array of items
   * You will need to use JSON.stringify() to format the JS array into a string
   * in order to save in localStorage
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const item = event.target.todoItem.value;
    const newTodoItems = [...todoItems, item]; // ...spread operator used to copy array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Copy_an_array
    setTodoItems(newTodoItems);

    // Slide 10: Writing Data
    // FORMAT: localStorage.setItem(key, value)
    // FORMAT: localStorage.setItem(stateName, stringified value)
    localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
    event.target.todoItem.value = ""; //clear input field after event
  };

  /*
   * When theme toggle button is clicked try to set localStorage with the value of theme
   * Because it's already a string you can save that value into localStorage without using JSON.stringify
   */
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Slide 10: Writing Data
    // value is already stringified
    localStorage.setItem("theme", newTheme);
  };

  // We can conditionally set our CSS class based on current theme value
  const appClass = theme === "dark" ? "app app--dark" : "app";

  return (
    <div className={appClass}>
      <h1>Todo</h1>

      <p>
        <button onClick={handleThemeToggle}>
          Toggle {theme === "light" ? "dark 🌙" : "light ☀️"} theme
        </button>
      </p>

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="todoItem" placeholder="Todo item" />
        <button type="submit">Add item</button>
      </form>

      <ul className="todo-list">
        {todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
