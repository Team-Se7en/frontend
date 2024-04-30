import { Box, Button, Checkbox, FormControlLabel, Grid, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

interface FilterProps {
    onProfessorFilter: (filter: FilterOptions) => void;
}

interface FilterOptions {
    status: ('accepted'|'rejected'|'pending')[];
    term: ('spring' | 'summer' | 'autumn')[];
    feeMin: number;
    feeMax: number;
    year: number[];
}

const ProfessorRequestFilter: React.FC<FilterProps> = ({ onProfessorFilter }) => {
    const [status, setStatus] = useState<FilterOptions['status']>([]);
    const [term, setTerm] = useState<FilterOptions['term']>([]);
    const [feeMin, setFeeMin] = useState<number>(0);
    const [feeMax, setFeeMax] = useState<number>(500);
    const [year, setYear] = useState<number[]>([]);
    const [reset, setReset] = useState<boolean>(false);


    const handleApplyFilter = () => {
        const filter: FilterOptions = {
            status,
            term,
            feeMin,
            feeMax,
            year,
        };
        onProfessorFilter(filter);
    };

    const handleResetFilter = () => {
        setStatus([]);
        setTerm([]);
        setFeeMin(0);
        setFeeMax(500);
        setYear([]);
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding:'64px'}}>
            <Typography variant="h5">Filter</Typography>
            <Grid container spacing={1} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Grid item xs={12} md={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Typography variant="body1">Status</Typography>
                    <FormControlLabel
                        control={<Checkbox checked={status.includes('accepted')}
                        onChange={() => setStatus(prev => prev.includes('accepted') ? prev.filter(t => t !== 'accepted') : [...prev, 'accepted'])}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: '1rem' 
                            }
                        }}
                        />}
                        label="Accepted"
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                fontSize: '0.8rem'
                            }
                        }}
                    />
                    
                    <FormControlLabel
                        control={<Checkbox checked={status.includes('rejected')}
                        onChange={() => setStatus(prev => prev.includes('rejected') ? prev.filter(t => t !== 'rejected') : [...prev, 'rejected'])}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: '1rem' 
                            }
                        }}
                        />}
                        label="Rejected"
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                fontSize: '0.8rem'
                            }
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={status.includes('pending')}
                        onChange={() => setStatus(prev => prev.includes('pending') ? prev.filter(t => t !== 'pending') : [...prev, 'pending'])}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: '1rem' 
                            }
                        }}
                        />}
                        label="Pending"
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                fontSize: '0.8rem'
                            }
                        }}
                    />

                </Grid>
                <Grid item xs={12} md={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Typography variant="body1">Term</Typography>
                    <FormControlLabel
                        control={<Checkbox checked={term.includes('spring')}
                        onChange={() => setTerm(prev => prev.includes('spring') ? prev.filter(t => t !== 'spring') : [...prev, 'spring'])}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: '1rem' 
                            }
                        }}
                        />}
                        label="Spring"
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                fontSize: '0.8rem'
                            }
                        }}
                    />
                    
                    <FormControlLabel
                        control={<Checkbox checked={term.includes('autumn')}
                        onChange={() => setTerm(prev => prev.includes('autumn') ? prev.filter(t => t !== 'autumn') : [...prev, 'autumn'])}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: '1rem' 
                            }
                        }}
                        />}
                        label="Autumn"
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                fontSize: '0.8rem'
                            }
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={term.includes('summer')}
                        onChange={() => setTerm(prev => prev.includes('summer') ? prev.filter(t => t !== 'summer') : [...prev, 'summer'])}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: '1rem' 
                            }
                        }}
                        />}
                        label="Summer"
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                fontSize: '0.8rem'
                            }
                        }}
                    />

                </Grid>
                <Grid item xs={12} md={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Typography variant="body1">Year</Typography>
                    {[2024, 2025, 2026].map((y) => (
                        <FormControlLabel
                            key={y}
                            control={<Checkbox checked={year.includes(y)} onChange={() => setYear(prev => prev.includes(y) ? prev.filter(n => n !== y) : [...prev, y])}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1rem' 
                                }
                            }}
                            />}
                            label={y.toString()}
                            sx={{
                                '& .MuiFormControlLabel-label': {
                                    fontSize: '0.8rem'
                                }
                            }}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography sx={{ marginBottom: '48px' }}>Fee</Typography>
                    <Slider  sx={{marginTop:'16px', color: '#0F1035',width:'200px',}} value={[feeMin, feeMax]} onChange={(_, newValue) => {
                        setFeeMin(newValue[0] as number);
                        setFeeMax(newValue[1] as number);
                    }}
                    min={0}
                    max={500}
                    valueLabelDisplay="on"
                    />
                    <Typography  sx={{ color: 'gray', width:'200px',}}>{`Fee Range: ${feeMin}$ - ${feeMax}$`}</Typography>

                </Grid>
            </Grid>
            
            <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Button onClick={handleApplyFilter}
            sx={{ marginTop: '16px', marginRight: '16px', color:'white', backgroundColor:'#0F1035'}}>
            Apply</Button>
            
            <Button onClick={handleResetFilter}
            sx={{ marginTop: '16px', marginRight: '16px', color:'white', backgroundColor:'#7FC7D9 '}}>
            Reset</Button>
            </Grid>

        </Box>
    );
};

export default ProfessorRequestFilter;
