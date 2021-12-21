import "./App.css";
import ContextProvider from "./Context/Context";
import TableComponent from "./Components/Table/TableComponent";
function App() {
  return (
    <ContextProvider>
      <TableComponent />
    </ContextProvider>
  );
}

export default App;
