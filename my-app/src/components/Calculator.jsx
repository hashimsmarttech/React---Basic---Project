import React, { useState } from 'react';

const Calculator = () => {
  const [inputVal, setInputVal] = useState('');

  return (
    <div className="containor">
      <form  className="calci">
        <h2>Calculator</h2>
        <input
          type="text"
          id="display"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <br />

        <input
          type="button"
          value="AC"
          className="button"
          onClick={() => setInputVal(inputVal.slice(0, -1))}
        />

        <input
          type="button"
          value="CE"
          className="button"
          onClick={() => setInputVal('')}
        />
        <input
          type="button"
          value="%"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <input
          type="button"
          value="/"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <br />

        <input
          type="button"
          value="7"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />
        <input
          type="button"
          value="8"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />
        <input
          type="button"
          value="9"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <input
          type="button"
          value="*"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <br />

        <input
          type="button"
          value="4"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />
        <input
          type="button"
          value="5"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />
        <input
          type="button"
          value="6"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <input
          type="button"
          value="-"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <br />

        <input
          type="button"
          value="1"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />
        <input
          type="button"
          value="2"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />
        <input
          type="button"
          value="3"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <input
          type="button"
          value="+"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <br />

        <input
          type="button"
          value="0"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <input
          type="button"
          value="00"
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <input
          type="button"
          value="."
          className="button"
          onClick={(e) => setInputVal(inputVal + e.target.value)}
        />

        <input
          type="button"
          value="="
          className="button"
          onClick={() => {
            try {
              setInputVal(eval(inputVal));
            } catch {
              console.log('Error');
            }
          }}
        />
      </form>
    </div>
  );
};

export default Calculator;
