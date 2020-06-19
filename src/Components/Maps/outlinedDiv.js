import React from "react";

import TextField from "@material-ui/core/TextField";

const InputComponent = ({ inputRef, ...other }) => <div {...other} />;
const OutlinedDiv = ({ children, label }) => {
    return (
        <TextField
            variant="outlined"
            label={label}
            multiline
            InputLabelProps={{ shrink: true }}
            InputProps={{
                inputComponent: InputComponent
            }}
            inputProps={{ children: children ,style:{height: '600px', overflow: 'scroll'}}}
        />
    );
};
export default OutlinedDiv;
