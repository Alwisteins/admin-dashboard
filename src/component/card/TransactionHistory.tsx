import {
  Paid,
  KeyboardDoubleArrowUp,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";

const transactions = [
  { id: 1, amount: 6, description: "Order", date: "21 Jan, 14:21" },
  { id: 2, amount: 710, description: "Income", date: "21 Jan, 14:23" },
  { id: 3, amount: -210, description: "Outcome", date: "21 Jan, 17:21" },
  { id: 4, amount: 2, description: "Order", date: "21 Jan, 19:07" },
  { id: 5, amount: 250, description: "Income", date: "21 Jan, 19:08" },
];

const TransactionHistory = (): JSX.Element => {
  return (
    <div className="absolute mt-48 h-96 right-11 w-1/5 rounded bg-palette-white">
      <div className="text-center h-9 my-3 text-palette-100 border-b-2 border-black-100">
        <Paid /> Transaction History
      </div>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex items-center px-4 py-2 ${
              transaction.amount < 0 ? "text-red-600" : "text-green-600"
            }`}
          >
            <div className="bg-palette-bg flex justify-center items-center w-12 h-12 rounded-full">
              {transaction.amount >= 0 ? (
                <KeyboardDoubleArrowUp />
              ) : (
                <KeyboardDoubleArrowDown />
              )}
            </div>
            <div className='ml-1.5'>
              <h1>{transaction.description}</h1>
              <p className="text-xs text-palette-gray">{transaction.date}</p>
            </div>
            <div className="absolute right-4">
              {transaction.description === "Order" ? (
                <span>{`${transaction.amount >= 0 ? "+" : "-"}${Math.abs(
                  transaction.amount
                )}`}</span>
              ) : (
                <span>{`${transaction.amount >= 0 ? "+$" : "-$"}${Math.abs(
                  transaction.amount
                )}`}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
