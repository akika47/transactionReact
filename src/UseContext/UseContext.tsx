import { createContext, ReactNode, useState } from "react";

const initialState = {
    transactions: [
        {
            id: 1,
            text: "Flowers",
            amount: -30,
        },
        {
            id:2,
            text:"Salary",
            amount:300,
        },
        {
            id:3,
            text:"Book",
            amount: -10,
        },
    ]
};

type childrenProps={
    children:ReactNode;
}

export const GlobalContext = createContext(initialState)

const GlobalProvider = ({children}:childrenProps) => {

    const [transactions, setTransactions] = useState(initialState.transactions)
  return (
    <GlobalContext.Provider value={{transactions}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider