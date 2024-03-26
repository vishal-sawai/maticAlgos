import AreaChart from "./components/Chart"
import cdata from "./data/ChartData"
import DataTable from "./components/DataTable"
import { TableData } from "./data/TableData"
const App = () => {
  return (
    <div className="mt-5 flex justify-center flex-wrap mx-5">
      <div className="w-2/4 grow">
        <AreaChart dataProps={cdata} />
      </div>
      <div className="w-96 ">
        <DataTable data={TableData.combined} />
      </div>
    </div>
  )
}

export default App
