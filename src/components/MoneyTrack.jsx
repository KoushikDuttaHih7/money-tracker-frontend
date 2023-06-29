import React, { useEffect, useState } from "react";

const MoneyTrack = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [datetime, setDatetime] = useState();
  const [description, setDescription] = useState();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, [setTransactions]);

  const getTransactions = async () => {
    const url = "http://localhost:8000/api/transactions";
    const response = await fetch(url);
    return response.json();
  };

  const addNewTransaction = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/transaction";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, price, description, datetime }),
    }).then((response) => {
      response.json().then((json) => {
        setName("");
        setPrice("");
        setDatetime("");
        setDescription("");
        // console.log("result", json);
        window.location.reload(true);
      });
    });
  };

  let balance = 0;
  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }

  return (
    <main>
      <div className='title'>Your Expense Report</div>
      <h1>₹{balance}</h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input
            type='text'
            placeholder='Product'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            placeholder='Price'
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='basic'>
          <input
            type='datetime-local'
            required
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>
        <div className='description'>
          <input
            type='text'
            placeholder='Description'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type='submit'>Add New Transaction</button>
      </form>
      <div className='transactions'>
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <div className='transaction' key={transaction._id}>
              <div className='left'>
                <div className='name'>{transaction.name}</div>
                <div className='description'>{transaction.description}</div>
              </div>
              <div className='right'>
                <div
                  className={
                    "price " + (transaction.price < 0 ? "red" : "green")
                  }
                >
                  ₹ {transaction.price}
                </div>
                <div className='datetime'>{transaction.datetime}</div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default MoneyTrack;
