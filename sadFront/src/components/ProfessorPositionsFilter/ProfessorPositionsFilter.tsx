import { Box, Button, Checkbox, FormControlLabel, Grid, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

interface FilterProps {
    onProfessorFilter: (filter: FilterOptions) => void;
}

interface FilterOptions {
    term: ('spring' | 'summer' | 'autumn')[];
    feeMin: number;
    feeMax: number;
    year: number[];
}

const ProfessorPositionsFilter: React.FC<FilterProps> = ({ onProfessorFilter }) => {
    const [term, setTerm] = useState<FilterOptions['term']>([]);
    const [feeMin, setFeeMin] = useState<number>(0);
    const [feeMax, setFeeMax] = useState<number>(500);
    const [year, setYear] = useState<number[]>([]);
    const [reset, setReset] = useState<boolean>(false);


    const handleApplyFilter = () => {
        const filter: FilterOptions = {
            term,
            feeMin,
            feeMax,
            year,
        };
        onProfessorFilter(filter);
    };

    const handleResetFilter = () => {
        setTerm([]);
        setFeeMin(0);
        setFeeMax(500);
        setYear([]);
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding:'64px'}}>
            <Typography variant="h6">Filter</Typography>
            <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <Grid item xs={12} md={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Typography variant="body1">Term</Typography>
                    <FormControlLabel
                        control={<Checkbox checked={term.includes('spring')}
                        onChange={() => setTerm(prev => prev.includes('spring') ? prev.filter(t => t !== 'spring') : [...prev, 'spring'])} />}
                        label="Spring"
                    />
                    
                    <FormControlLabel
                        control={<Checkbox checked={term.includes('autumn')}
                        onChange={() => setTerm(prev => prev.includes('autumn') ? prev.filter(t => t !== 'autumn') : [...prev, 'autumn'])} />}
                        label="Autumn"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={term.includes('summer')}
                        onChange={() => setTerm(prev => prev.includes('summer') ? prev.filter(t => t !== 'summer') : [...prev, 'summer'])} />}
                        label="Summer"
                    />

                </Grid>
                <Grid item xs={12} md={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <Typography variant="body1">Year</Typography>
                    {[2024, 2025, 2026].map((y) => (
                        <FormControlLabel
                            key={y}
                            control={<Checkbox checked={year.includes(y)} onChange={() => setYear(prev => prev.includes(y) ? prev.filter(n => n !== y) : [...prev, y])} />}
                            label={y.toString()}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography sx={{ marginBottom: '48px' }}>Fee Range:</Typography>
                    <Slider  sx={{marginTop:'16px', color: '#0F1035',}} value={[feeMin, feeMax]} onChange={(_, newValue) => {
                        setFeeMin(newValue[0] as number);
                        setFeeMax(newValue[1] as number);
                    }}
                    min={0}
                    max={500}
                    valueLabelDisplay="on"
                    />
                    <Typography  sx={{ color: 'gray' }}>{`Fee Range: ${feeMin}$ - ${feeMax}$`}</Typography>

                </Grid>
            </Grid>
            
            <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Button onClick={handleApplyFilter} sx={{ marginTop: '16px', marginRight: '16px', color:'white', backgroundColor:'#0F1035'}}>Apply</Button>
            <Button onClick={handleResetFilter} sx={{ marginTop: '16px', marginRight: '16px', color:'white', backgroundColor:'#7FC7D9 '}}>Reset</Button>
            </Grid>

        </Box>
    );
};

export default ProfessorPositionsFilter;
