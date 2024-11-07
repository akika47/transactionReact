type transactionProps = {
    id: number,
    text: string,
    amount: number,
}

const Transaction = (props: transactionProps) => {
    const {text, amount} = props;
  return (
    <li className={props.amount > 0 ? 'plus' : 'minus'}>
        {text} <span>${amount}</span> <button>X</button>
    </li>
  )
}

export default Transaction