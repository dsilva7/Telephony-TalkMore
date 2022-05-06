const BASE_API = "http://localhost:3001";

export function calculatePrice({ dddOrigin, dddTarget, plan, minutes }) {
  return fetch(
    `${BASE_API}/price?originDDD=${dddOrigin}&targetDDD=${dddTarget}&planId=${plan}&time=${minutes}`
  ).then((resp)=>resp.json());
}
