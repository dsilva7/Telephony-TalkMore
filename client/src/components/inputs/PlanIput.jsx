import { FormControl, InputLabel, MenuItem} from "@mui/material";
import Select from "@mui/material/Select";

function PlanInput({ value, onChance }) {
  return (
    <FormControl fullWidth sx={{ minWidth: 120 }}>
      <InputLabel>Plans</InputLabel>
      <Select value={value} onChange={onChance} id="plans" label="Plans">
        <MenuItem value="1">Fale Mais 30</MenuItem>
        <MenuItem value="2">Fale Mais 60</MenuItem>
        <MenuItem value="3">Fale Mais 120</MenuItem>
      </Select>
    </FormControl>
  );
}
export default PlanInput;
