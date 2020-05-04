import React, { useState } from 'react';
import "./App.css";
import "./SignUp.css";
import {Select, FormControl, MenuItem, InputLabel} from '@material-ui/core/';
import FormHelperText from '@material-ui/core/FormHelperText';

const ProviderType: React.FC<{valid: boolean, handleChange: (e: React.SyntheticEvent) => void}> = (props: any) =>
{
   const [values, setValue] = useState("");
   const change = (e: any) => {
      console.log(values);
      let target = e.target as any;
      setValue(target.value);
      props.handleChange(e);
   }

   const whichForm = props.valid ? 
   <FormControl className="info-form-provider" variant="outlined">
      <InputLabel>Provider Type</InputLabel>
      <Select label="Provider Type" native name="providerType" onChange={change} value={values} aria-label="provider type">
         <option value="" disabled/>                                 
         <option value="LMFT">LMFT</option>                                                    
         <option value="LCSW">LCSW</option>
         <option value="LPC">LPC</option>
         <option value="LPCC">LPCC</option>
         <option value="AMFT">AMFT</option>
         <option value="MFT">MFT</option>
         <option value="MHC">MHC</option>
         <option value="M.D.">M.D.</option>
         <option value="D.O.">D.O.</option>
         <option value="Ph.D.">Ph.D.</option>
         <option value="Psy.D.">Psy.D.</option>
         <option value="Other">Other</option>
      </Select>
</FormControl> :
<FormControl className="info-form-provider" variant="outlined" error>
   <InputLabel>Provider Type</InputLabel>
   <Select label="Provider Type" native name="providerType" onChange={change} value={values} aria-label="provider type">                                                   >
      <option value="" disabled>{""}</option>
      <option value="LMFT">LMFT</option>                                                    
      <option value="LCSW">LCSW</option>
      <option value="LPC">LPC</option>
      <option value="LPCC">LPCC</option>
      <option value="AMFT">AMFT</option>
      <option value="MFT">MFT</option>
      <option value="MHC">MHC</option>
      <option value="M.D.">M.D.</option>
      <option value="D.O.">D.O.</option>
      <option value="Ph.D.">Ph.D.</option>
      <option value="Psy.D.">Psy.D.</option>
      <option value="Other">Other</option>
   </Select>
   <FormHelperText>Required field.</FormHelperText>
</FormControl>

      return (
         whichForm
      );
}

export default ProviderType;