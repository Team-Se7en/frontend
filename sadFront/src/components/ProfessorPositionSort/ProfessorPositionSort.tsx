import * as React from 'react';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names: string[] = [
    'Min Request',
    'Max Request',
    'Min Fee',
    'Max Fee',
    'Earliest Request Date',
    'Latest Request Date',
    'Closest Start Date Position',
    'Farthest Start Date Position',
];

interface StyleProps {
    name: string;
    personName: string;
}

function getStyles({ name, personName }: StyleProps, theme: Theme) {
    return {
        fontWeight: personName === name ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
    };
}

const ProfessorPositionSort: React.FC = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setPersonName(event.target.value as string);
    };

    return (
        <Box>
            <FormControl sx={{ m: 1, width: 355 }}>
                <InputLabel id="demo-single-select-label">Sort By</InputLabel>
                <Select
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-single" label="Sort Criteria" />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles({ name, personName }, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default ProfessorPositionSort;