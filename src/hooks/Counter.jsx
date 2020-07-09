import React, { useState, Fragment } from "react";

function Counter(props) {
  const [count, setState] = useState(0);
  const [name, setName] = useState(" ");

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times!!!
      </div>
      <div>Counter: {count}</div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
