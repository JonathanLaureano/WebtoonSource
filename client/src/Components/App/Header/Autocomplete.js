import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { 
  Stack, 
  Autocomplete, 
  TextField , 
  createFilterOptions, 
  Box
} from "@mui/material"




function AutoComplete({ top100Films }) {

    const [value, setValue] = useState("")
    
    const filter = createFilterOptions({
        limit: 5
    })

    console.log({ value })
    
    return (
        <Stack spacing={2} width='150px'>
            <Autocomplete
                freeSolo
                handleHomeEndKeys
                autoHighlight
                options={top100Films}
                value={value}
                renderOption={(props, option) => <li {...props}>{option.title}</li>}
                filterOptions={(options, params) => {
                    return filter(options, params);
                }}
                renderInput={(params) => (
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', backgroundColor: 'rgb(32,32,32)' }}>
                    <SearchIcon sx={{ color: 'lightgrey', mr: 1, my: 0.5 }} />
                    <TextField {...params} 
                    placeholder="Search"
                    size="small"
                    variant="standard"
                    sx={{ caretColor: 'white' }}
                    />
                  </Box>
                )}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                    setValue({
                        title: newValue,
                    });
                    } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                        title: newValue.inputValue,
                    });
                    } else {
                    setValue(newValue);
                    }
                }}
                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                    return option;
                    }
                    // Regular option
                    return option.title;
                }}
                
                />
        </Stack>
    )
}

export default AutoComplete