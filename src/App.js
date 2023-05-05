import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 3, 12) },
  { id: "e3", title: "New TV", amount: 799.49, date: new Date(2020, 8, 12) },
  {
    id: "e4",
    title: "New Fridge",
    amount: 599.49,
    date: new Date(2020, 3, 12),
  },
  { id: "e5", title: "Internet", amount: 399.0, date: new Date(2020, 5, 12) },
  {
    id: "e6",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e7",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_Expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
