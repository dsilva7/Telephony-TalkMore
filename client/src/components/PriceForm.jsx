import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { calculatePrice } from "../api/priceService";
import DDDInput from "./inputs/DDDInput";
import PlanInput from "./inputs/PlanIput";


function PriceForm({ onFormSubmit }) {
  const [dddOrigin, setdddOrigin] = useState("");
  const [dddTarget, setdddTarget] = useState("");
  const [plan, setPlan] = useState("");
  const [minutes, setMinutes] = useState(0);
  const onSubmit = async (e) => {
      e.preventDefault();
      const formData = { dddOrigin, dddTarget, plan, minutes }
      const price = await calculatePrice(formData);
      
    onFormSubmit({...formData, ...price, id: Math.random().toString()});
   
  };
  return (
    <div className="price-form" onSubmit={(e) => onSubmit(e)}>
      <DDDInput
        value={dddOrigin}
        onChance={(e) => {
          setdddOrigin(e.target.value);
        }}
      />
      <DDDInput
        value={dddTarget}
        onChance={(e) => {
          setdddTarget(e.target.value);
        }}
      />
      <PlanInput
        value={plan}
        onChance={(e) => {
          setPlan(e.target.value);
        }}
      />
      <TextField label="Minutes"
        type="number"
        value={minutes}
        onChange={(e) => {
          setMinutes(e.target.value);
        }}
      />
      <Button onClick={onSubmit} value={"submit"} variant = 'contained'>Submit</Button>
    </div>
  );
}
export default PriceForm;
