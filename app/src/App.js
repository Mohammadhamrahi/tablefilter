import "./App.css";
import ContextProvider from "./Context/Context";
import TableComponent from "./Components/Table/TableComponent";
import FilterComponent from "./Components/filter/FilterComponent";

import AddBtn from "./Components/addbtn/AddBtn";

function App() {
  return (
    <ContextProvider>
      <FilterComponent />
      <AddBtn />
      <TableComponent />
    </ContextProvider>
  );
}

export default App;
