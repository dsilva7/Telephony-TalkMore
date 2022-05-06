import { calculatePrice } from "../api/priceService";
import { DataGrid } from "@mui/x-data-grid";

var formatter = new Intl.NumberFormat("br", {
  style: "currency",
  currency: "BRL",
});

const tablePlan = [
  {
    id: 1,
    name: "FaleMais 30",
    maxTime: 30,
  },
  {
    id: 2,
    name: "FaleMais 60",
    maxTime: 60,
  },
  {
    id: 3,
    name: "FaleMais 120",
    maxTime: 120,
  },
];

const columns = [
  { field: "id", hide: true },
  { field: "dddOrigin", headerName: "DDD Origin", flex: 1 },
  { field: "dddTarget", headerName: "DDD Target", flex: 1 },
  {
    field: "plan",
    headerName: "Plans",
    flex: 1,
    valueFormatter: (params) =>
      tablePlan.find((x) => x.id == params.value).name || params.value,
  },
  { field: "minutes", headerName: "Minutes", flex: 1 },
  {
    field: "withPlan",
    headerName: "With Plan",
    flex: 1,
    valueFormatter: (params) => formatter.format(params.value),
  },
  {
    field: "withoutPlan",
    headerName: "Without Plan",
    flex: 1,
    valueFormatter: (params) => formatter.format(params.value),
  },
];

function PriceTable({ values }) {
  return (
    <div className="price-table" style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={values} columns={columns} />
    </div>
  );
}

export default PriceTable;
