import { multiply, division } from '../utils/UsefulFunction.js';
function ShowCalc() {
return (
<div className="ShowCalc">
<h1>{multiply(6, 2)}</h1>
<h1>{division(6, 2)}</h1>
<h1>{multiply(6, 2)}</h1>
<h1>{division(6, 2)}</h1>
</div>
);
} 
export default ShowCalc;