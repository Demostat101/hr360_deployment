

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

// const customerDetalsFromLocalStorage = JSON.parse(localStorage.getItem("customers")|| "[]")

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelectChip({employeeSkills}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

//   React.useEffect(()=>{
//     localStorage.setItem("customers", JSON.stringify(employeeSkills))

// },[employeeSkills]);

console.log(personName);


  return (
    <div>
      <FormControl sx={{ width: "100% "}} variant='none'>
        <InputLabel variant='none' id="demo-multiple-chip-label" ></InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }} variant="none">
              {selected.map((value) => (
                <Chip key={value} label={value} color='info' variant="filled" />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {employeeSkills.map((skill) => (
            <MenuItem
              key={skill}
              value={skill}
              style={getStyles(skill, personName, theme)}
              
            >
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}