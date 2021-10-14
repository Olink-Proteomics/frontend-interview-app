import "./App.css";

import { ProteinList } from "./components/ProteinList";
// eslint-disable-next-line
import { fetchProteins, fetchError } from "./lib/api";
import { useFetchData } from "./hooks/fetch-data";

function App() {
  // Simulate requests to external API
  const { loading, data, error } = useFetchData(fetchProteins());
  //const { loading, data, error } = useFetchData(fetchError());

  return (
    // Here we want to see the protein list
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <ProteinList proteins={data} />}
    </div>
  );
}

export default App;
