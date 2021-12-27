import React, {FC, useState} from 'react';

const App:FC = () => {

    const [data, setData] = useState(undefined)

    const fetchData = async () => {
      const result = await fetch('https://api.covid19api.com/summary')
        const data = await result.json()
    }

  return (
    <div>
      <h3>Global Covid-19 data</h3>
    </div>
  );
}

export default App;
