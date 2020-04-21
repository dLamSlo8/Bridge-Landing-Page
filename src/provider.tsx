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
            <option value="Counselor">Counselor</option>                                                    
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Psychologist">Psychologist</option>
            <option value="Therapist">Therapist</option>                                            
         </Select>
   </FormControl> :
   <FormControl className="info-form-provider" variant="outlined" error>
      <InputLabel>Provider Type</InputLabel>
      <Select label="Provider Type" native name="providerType" aria-label="provider type">                                                   >
         <option value="" disabled selected>{""}</option>      
         <option value="Counselor">Counselor</option>                                                    
         <option value="Psychiatrist">Psychiatrist</option>
         <option value="Psychologist">Psychologist</option>
         <option value="Therapist">Therapist</option>                                            
      </Select>
      <FormHelperText>Required field.</FormHelperText>
   </FormControl>;
      return (
         whichForm
      );
   }
}

export default ProviderType;