import { useState } from "react";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Clock from './components/Clock/Clock'
import TodoList from "./components/TodoList/TodoList";
import UncontrolledLogin from './components/UncontrolledLogin'
import Container from './components/Container';

import "./App.css";

const App = () => {
	const [items, setItems] = useState([
		"Red",
		"Blue",
		"Green",
		"Yellow",
		"Orange",
	]);
	const [inputValue, setInputValue] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		if (!inputValue) return;
		setItems((prevItems) => {
			return [...prevItems, inputValue];
		});
		setInputValue("");
	}

	function handleChange(event) {
		const value = event.target.value;
		setInputValue(value);
	}

	function handleReset() {
		setInputValue("");
		setItems([]);
	}

	function handleDelete(e) {
		const element = e.target.dataset.color;
		setItems((prevItems) => {
			const newItems = prevItems.filter((item) => item !== element);
			return newItems;
		});
	}

	return (
		<div id="app">
			<Welcome />
			<Counter />
			<Login />
			<Clock />
			<UncontrolledLogin />
			<h1 className="text-exl">Hello</h1>
			<TodoList
				items={items}
				handleSubmit={handleSubmit}
				handleReset={handleReset}
				inputValue={inputValue}
				handleChange={handleChange}
				handleDelete={handleDelete}
			/>
			<Container title="Hello World!">
				<Counter />
			</Container>
		</div>
	);
};

export default App;
