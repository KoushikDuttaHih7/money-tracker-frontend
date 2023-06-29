import React, { useState } from "react";

const MoneyTrack = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [datetime, setDatetime] = useState();
  const [description, setDescription] = useState();

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
        console.log("result", json);
      });
    });
  };

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input
            type='text'
            placeholder='Product'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='basic'>
          <input
            type='datetime-local'
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>
        <div className='description'>
          <input
            type='text'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type='submit'>Add New Transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>TV</div>
            <div className='description'>Its a new TV</div>
          </div>
          <div className='right'>
            <div className='price red'>-500</div>
            <div className='datetime'>2022-12-20 03:50</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Phone</div>
            <div className='description'>Its a new Phone</div>
          </div>
          <div className='right'>
            <div className='price green'>+500</div>
            <div className='datetime'>2022-12-20 03:55</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Car</div>
            <div className='description'>Its a new Car</div>
          </div>
          <div className='right'>
            <div className='price red'>-5000</div>
            <div className='datetime'>2022-12-20 03:59</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoneyTrack;
