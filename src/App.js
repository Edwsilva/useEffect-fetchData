import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

// https://www.robinwieruch.de/react-hooks-fetch-data/

function App() {
  const [data, setData] = useState({ hits: [] });
 //const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        // `http://hn.algolia.com/api/v1/search?query=${query}`,
        `http://hn.algolia.com/api/v1/search?query=${search}`,
      );
      setData(result.data);
    };

    fetchData();
  // }, [query]);
  }, [search]);

 return (
    <Fragment>
      <input
        type="text"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;