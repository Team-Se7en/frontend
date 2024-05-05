// import * as React from 'react';

// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { Theme, useTheme } from '@mui/material/styles';

// import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import OutlinedInput from '@mui/material/OutlinedInput';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };

// const names: string[] = [
//     'Min Fee',
//     'Max Fee',
//     'Earliest Request Date',
//     'Latest Request Date',
//     'Closest Start Date Position',
//     'Farthest Start Date Position',
// ];

// interface StyleProps {
//     name: string;
//     personName: readonly string[];
// }

// function getStyles({ name, personName }: StyleProps, theme: Theme) {
//     return {
//         fontWeight: personName.includes(name) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
//     };
// }

// const StudentRequestSort: React.FC = () => {
//     const theme = useTheme();
//     const [personName, setPersonName] = React.useState<string[]>([]);

//     const handleChange = (event: SelectChangeEvent<typeof personName>) => {
//         const { target: { value } } = event;
//         setPersonName(
//             typeof value === 'string' ? value.split(',') : value,
//         );
//     };

//     const handleDelete = (chipToDelete: string) => {
//         setPersonName((prev) => prev.filter(chip => chip !== chipToDelete));
//     };

//     return (
//         <Box>
//             <FormControl sx={{ m: 1, width: 250 }}>
//                 <InputLabel id="demo-multiple-chip-label">Sort By</InputLabel>
//                 <Select
//                     labelId="demo-multiple-chip-label"
//                     id="demo-multiple-chip"
//                     multiple
//                     value={personName}
//                     onChange={handleChange}
//                     input={<OutlinedInput id="select-multiple-chip" label="Sort Criteria" />}
//                     renderValue={(selected: string[]) => (
//                         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                             {selected.map((value) => (
//                                 <Chip key={value} label={value} onDelete={() => handleDelete(value)} />
//                             ))}
//                         </Box>
//                     )}
//                     MenuProps={MenuProps}
//                 >
//                     {names.map((name) => (
//                         <MenuItem
//                             key={name}
//                             value={name}
//                             style={getStyles({ name, personName }, theme)}
//                         >
//                             {name}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// }

// export default StudentRequestSort;

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

const StudentRequestSort: React.FC = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setPersonName(event.target.value as string);
    };

    return (
        <Box>
            <FormControl sx={{ m: 1, width: 250 }}>
                <InputLabel id="demo-single-select-label">Sort By</InputLabel>
                <Select
                    labelId="demo-single-select-label"
                    id="demo-single-select"
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

export default StudentRequestSort;