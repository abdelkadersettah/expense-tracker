interface TransactionItemProps {
  label: string;
  category: string;
  amount: number;
  date: string;
}

const TransactionItem: React.FunctionComponent<TransactionItemProps> = ({
  label,
  category,
  amount,
  date,
}) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{date}</td>
    </tr>
  );
};

export default TransactionItem;
