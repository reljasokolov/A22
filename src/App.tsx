import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import Button from "./components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John",
      surname: "Doe",
      school: "ABC School",
      points: 80,
      color: "",
    },
    {
      id: 2,
      name: "Jane",
      surname: "Smith",
      school: "XYZ School",
      points: 90,
      color: "",
    },
    {
      id: 3,
      name: "Michael",
      surname: "Johnson",
      school: "DEF School",
      points: 35,
      color: "",
    },
    {
      id: 4,
      name: "Emily",
      surname: "Williams",
      school: "GHI School",
      points: 40,
      color: "",
    },
    {
      id: 5,
      name: "David",
      surname: "Brown",
      school: "JKL School",
      points: 95,
      color: "",
    },
  ]);
  const [sortOrder, setSortOrder] = useState("desc");
  const handleSortClick = () => {
    const newData = [...data];
    newData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.points - b.points;
      } else {
        return b.points - a.points;
      }
    });
    setData(newData);
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    console.log("Sortirano");
  };

  const handleColorClick = () => {
    setData(prevExpenses => {
      return prevExpenses.map((expense, index) => {
        if (index % 2 === 0) {
          return {
            ...expense,
            color: "bg-success",
          };
        } else {
          return {
            ...expense,
            color: "",
          };
        }
      });
    }
    );
    console.log("Obojano");
  };

  const handlePassedClick = () => {
    setData(prevExpenses => {
      return prevExpenses.map((expense) => {
        if (expense.points >=50) {
          return {
            ...expense,
            color: "bg-success",
          };
        } else {
          return {
            ...expense,
            color: "",
          };
        }
      });
    }
    );
    console.log("Obojano");
  };

  const handleFailedClick = () => {
    setData(prevExpenses => {
      return prevExpenses.map((expense) => {
        if (expense.points <=50) {
          return {
            ...expense,
            color: "bg-success",
          };
        } else {
          return {
            ...expense,
            color: "",
          };
        }
      });
    }
    );
    console.log("Obojano");
  };
  const handleDeleteClick = () => {
      setData(prevExpenses => {
      return prevExpenses.filter((expense) => {
        return expense.points >=50;
      });
    }
    );
    console.log("Obrisano");
  }
  return (
    <>
      <Header></Header>
      <br />
      <ExpenseList expenses={data}></ExpenseList>
      <div className="div4">
        <Button onClicked={handleSortClick}>Sortiraj</Button>
        <span>sd</span>
        <Button onClicked={handleColorClick}>Oboji neparne</Button>
        <span>sd</span>
         <Button onClicked={handlePassedClick}>Polozili</Button>
      <span>sd</span>
      <Button onClicked={handleFailedClick}>Nisu polozili</Button>
      <span>sd</span>
      <Button  onClicked={handleDeleteClick}>Izdvoji one koji su polozili</Button>  
      </div>
    </>
  );
}

export default App;
