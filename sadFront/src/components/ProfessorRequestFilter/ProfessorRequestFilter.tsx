// import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
// import React, { useState } from 'react';

// interface FilterProps {
//     onProfessorFilter: (filter: FilterOptions) => void;
// }

// interface FilterOptions {
//     status: ('accepted'|'rejected'|'pending')[];
//     major: string[];
// }

// const ProfessorRequestFilter: React.FC<FilterProps> = ({ onProfessorFilter }) => {
//     const [status, setStatus] = useState<FilterOptions['status']>([]);
//     const [major, setMajor] = useState<string[]>([]);
//     const statusOptions: ('accepted' | 'rejected' | 'pending')[] = ['accepted', 'rejected', 'pending'];

//     const toggleStatusOption = (option: 'accepted' | 'rejected' | 'pending') => {
//         setStatus(prev => {
//             const isOptionSelected = prev.includes(option);
//             if (isOptionSelected) {
//                 return prev.filter(item => item !== option);
//             } else {
//                 return [...prev, option];
//             }
//         });
//     };

//     const handleApplyFilter = () => {
//         const filter: FilterOptions = {
//             status,
//             major,
//         };
//         onProfessorFilter(filter);
//     };

//     const handleResetFilter = () => {
//         setStatus([]);
//         setMajor([]);
//     };

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '64px',border: '1px solid #ccc',borderRadius: '8px' }}>
//             <Typography variant="h5" >Filter</Typography>
//             <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
//                 <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
//                     <Typography variant="body1">Status</Typography>

//                         {statusOptions.map((statusOption) => (

//                         <FormControlLabel
//                             key={statusOption}
//                             control={<Checkbox checked={status.includes(statusOption)}
//                                 onChange={() => toggleStatusOption(statusOption)}
//                                 sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }}
//                             />}
                            
//                             label={statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
//                             sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem' } }}
//                         />

//                     ))}
                    
//                 </Grid>
//                 <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
//                     <Typography variant="body1">Major</Typography>
//                     {['Computer Science', 'Engineering', 'Mathematics'].map((majorOption) => (
//                         <FormControlLabel
//                             key={majorOption}
//                             control={<Checkbox checked={major.includes(majorOption)}
//                                 onChange={() => setMajor(prev => prev.includes(majorOption) ? prev.filter(m => m !== majorOption) : [...prev, majorOption])}
//                                 sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }}
//                             />}
                            
//                             label={majorOption}
//                             sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem' } }}
//                         />
//                     ))}
//                 </Grid>
//             </Grid>

//             <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
//                 <Button onClick={handleApplyFilter}
//                     sx={{ marginTop: '16px', marginRight: '16px', color: 'white', backgroundColor: '#0F1035' }}>
//                     Apply
//                 </Button>

//                 <Button onClick={handleResetFilter}
//                     sx={{ marginTop: '16px', marginRight: '16px', color: 'white', backgroundColor: '#7FC7D9 ' }}>
//                     Reset
//                 </Button>
//             </Grid>
//         </Box>
//     );
// };

// export default ProfessorRequestFilter;

import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

interface FilterProps {
    onProfessorFilter: (filter: FilterOptions) => void;
}

interface FilterOptions {
    status: ('accepted' | 'rejected' | 'pending')[];
    major: string[];
}

const ProfessorRequestFilter: React.FC<FilterProps> = ({ onProfessorFilter }) => {
    const [status, setStatus] = useState<FilterOptions['status']>([]);
    const [major, setMajor] = useState<string[]>([]);
    const statusOptions: ('accepted' | 'rejected' | 'pending')[] = ['accepted', 'rejected', 'pending'];

    const toggleStatusOption = (option: 'accepted' | 'rejected' | 'pending') => {
        setStatus(prev => {
            const isOptionSelected = prev.includes(option);
            if (isOptionSelected) {
                return prev.filter(item => item !== option);
            } else {
                return [...prev, option];
            }
        });
    };

    const handleApplyFilter = () => {
        const filter: FilterOptions = {
            status,
            major,
        };
        onProfessorFilter(filter);
    };

    const handleResetFilter = () => {
        setStatus([]);
        setMajor([]);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '64px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <Typography variant="h5">Filter</Typography>
            <Divider sx={{ width: '100%', my: 2 }} />

            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Grid item xs={12} md={4}>
                    <Typography variant="body1">Status</Typography>
                    {statusOptions.map((statusOption) => (
                        <FormControlLabel
                            key={statusOption}
                            control={<Checkbox checked={status.includes(statusOption)}
                                onChange={() => toggleStatusOption(statusOption)}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }}
                            />}
                            label={statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem' } }}
                        />
                    ))}
                </Grid>
                <Divider sx={{ width: '100%', my: 2 }} />

                <Grid item xs={12} md={4}>
                    <Typography variant="body1">Major</Typography>
                    {['Computer Science', 'Engineering', 'Mathematics'].map((majorOption) => (
                        <FormControlLabel
                            key={majorOption}
                            control={<Checkbox checked={major.includes(majorOption)}
                                onChange={() => setMajor(prev => prev.includes(majorOption) ? prev.filter(m => m !== majorOption) : [...prev, majorOption])}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }}
                            />}
                            label={majorOption}
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem' } }}
                        />
                    ))}
                </Grid>
            </Grid>

            <Divider sx={{ width: '100%', my: 2 }} />

            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Button onClick={handleApplyFilter}
                    sx={{ marginTop: '16px', marginRight: '16px', color: 'white', backgroundColor: '#0F1035' }}>
                    Apply
                </Button>
                <Button onClick={handleResetFilter}
                    sx={{ marginTop: '16px', marginRight: '16px', color: 'white', backgroundColor: '#7FC7D9' }}>
                    Reset
                </Button>
            </Grid>
        </Box>
    );
};

export default ProfessorRequestFilter;