import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
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
    // check if localStorage data exists for theme
    // if localStorage exists, update state with that data
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
  };

  /*
   * When theme toggle button is clicked try to set localStorage with the value of theme
   * Because it's already a string you can save that value into localStorage without using JSON.stringify
   */
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
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
