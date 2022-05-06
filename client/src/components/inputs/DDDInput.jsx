import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

function DDDInput({ value, onChance }) {
  return (
    <FormControl fullWidth sx={{ minWidth: 120 }}>
      <InputLabel>DDD</InputLabel>
      <Select value={value} onChange={onChance} id="dddOrigin" label="DDD">
        <MenuItem value="011">011</MenuItem>
        <MenuItem value="016">016</MenuItem>
        <MenuItem value="017">017</MenuItem>
        <MenuItem value="018">018</MenuItem>
      </Select>
    </FormControl>
  );
}

export default DDDInput;
