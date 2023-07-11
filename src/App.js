import "./css/main.css";
import useJsonFetch from "./components/useJsonFetch";

function App() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data", []);

  const [data1, loading1, error1] = useJsonFetch(
    "http://localhost:7070/error",
    []
  );
  const [data2, loading2, error2] = useJsonFetch(
    "http://localhost:7070/loading",
    []
  );

  return (
    <>
      data - {data.status}
      <br />
      error - {error1 != null ? "true" : "false"}
      <br />
      loading - {loading2 ? "true" : "false"}
    </>
  );
}

export default App;