import React from "react";

const MoneyTrack = () => {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className='basic'>
          <input type='text' placeholder='Product' />
          <input type='datetime-local' />
        </div>
        <div className='description'>
          <input type='text' placeholder='Description' />
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
