interface Expense {
  id: number;
  name: string;
  surname: string;
  school: string;
  points: number;
  color: string;
}

interface Props {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: Props) => {
  return (
    <table className="table table-bordered w-50 center">
      <thead>
        <tr>
          <th>Rbr</th>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Skola</th>
          <th>Poeni</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={expense.id} className={expense.color}>
            <td>{index + 1}</td>
            <td>{expense.name}</td>
            <td>{expense.surname}</td>
            <td>{expense.school}</td>
            <td>{expense.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
