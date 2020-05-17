import React from 'react';
import "./App.css";
import "./SignUp.css";
import {Select, FormControl, MenuItem, InputLabel} from '@material-ui/core/';
import FormHelperText from '@material-ui/core/FormHelperText';

class ProviderType extends React.Component<{valid: boolean}, {}> {
   constructor(props: any)
   {
       super(props);
       
   }

   render()
   {
      const whichForm = this.props.valid ? 
      <FormControl className="info-form-provider" variant="outlined">
         <InputLabel>Provider Type</InputLabel>
         <Select label="Provider Type" native name="providerType" aria-label="provider type">
            <option value="" disabled selected></option>                                   
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
      <Select label="Provider Type" native name="providerType" aria-label="provider type">                                                   >
         <option value="" disabled selected>{""}</option>
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
   </FormControl>;
      return (
         whichForm
      );
   }
}

export default ProviderType;