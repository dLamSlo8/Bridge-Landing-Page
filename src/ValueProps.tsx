import React from 'react';
import "./App.css";
import "./ValueProps.css"
import { findByLabelText } from '@testing-library/react';

class ValueProps extends React.Component<{}, {}> 
{
    constructor(props: any)
    {
        super(props);
    }
    render() 
    {
        return (
            <div className="value-prop-title" >
            </div>
        )
        }
    }
    
export default ValueProps;