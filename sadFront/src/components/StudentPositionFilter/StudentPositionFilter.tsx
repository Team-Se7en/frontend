import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FilterProps {
    onProfessorFilter: (filter: FilterOptions) => void;
}

interface FilterOptions {
    isfilled: ('Yes' | 'No')[];
    term: ('spring' | 'summer' | 'autumn')[];
    feeMin: number;
    feeMax: number;
    year: number[];
}

const StudentPositionFilter: React.FC<FilterProps> = ({ onProfessorFilter }) => {
    const [term, setTerm] = useState<FilterOptions['term']>([]);
    const [feeMin, setFeeMin] = useState<number>(0);
    const [feeMax, setFeeMax] = useState<number>(500);
    const [year, setYear] = useState<number[]>([]);
    const [isfilled, setIsfilled] = useState<FilterOptions['isfilled']>([]);
    const isfilledOptions: ('Yes' | 'No')[] = ['Yes', 'No'];

    const toggleIsfilledOption = (option: 'Yes' | 'No') => {
        setIsfilled(prev => {
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
            isfilled,
            term,
            feeMin,
            feeMax,
            year,
        };
        onProfessorFilter(filter);
    };

    const handleResetFilter = () => {
        setIsfilled([]);
        setTerm([]);
        setFeeMin(0);
        setFeeMax(500);
        setYear([]);
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        justifyContent: 'flex-start', borderRadius: '8px', marginLeft:'32px',
        width: '25%',height: '25%',
        }}>

        <Accordion sx = {{width: '100%',}}>

        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        // aria-controls="panel1-content"
        sx={{display: 'flex', padding:'16px', width: '100%', height: '100%'}}
        >
        Filter

        </AccordionSummary>
        <Divider sx={{ width: '100%', my: 2 ,backgroundColor:"#0F1035"}} />

        <AccordionDetails>
            
            
            <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Grid item xs={12} md={4}>
                    <Typography>Is filled</Typography>
                    {isfilledOptions.map((isfilledOptions) => (
                        <FormControlLabel
                            key={isfilledOptions}
                            control={<Checkbox checked={isfilled.includes(isfilledOptions)}
                                onChange={() => toggleIsfilledOption(isfilledOptions)}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }}
                            />}
                            label={isfilledOptions.charAt(0).toUpperCase() + isfilledOptions.slice(1)}
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem' } }}
                        />
                    ))}
                </Grid>
                <Divider sx={{ width: '100%', my: 2 ,backgroundColor:"#0F1035"}} />

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
                <Divider sx={{ width: '100%', my: 2 ,backgroundColor:"#0F1035"}} />

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
                <Divider sx={{ width: '100%', my: 2 ,backgroundColor:"#0F1035"}} />

                <Grid item xs={12} md={4}>

                    <Typography sx={{ marginBottom: '48px' }}>Fee</Typography>

                    <Slider 
                        sx={{marginTop:'16px', color: '#0F1035',width:'200px',}}
                        value={[feeMin, feeMax]}
                        onChange={(_, newValue) => {
                        if (Array.isArray(newValue) && newValue.length === 2) {
                            setFeeMin(newValue[0]);
                            setFeeMax(newValue[1]);
                                }
                            }}
                            min={0}
                            max={500}
                            valueLabelDisplay="on"
                        />

                    <Typography  sx={{ color: 'gray', width:'200px',}}>{`Fee Range: ${feeMin}$ - ${feeMax}$`}</Typography>

                </Grid>
            </Grid>
            <Divider sx={{ width: '100%', my: 2 ,backgroundColor:"#0F1035"}} />

            <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                
            <Button onClick={handleApplyFilter}
            sx={{ marginTop: '16px', marginRight: '16px', color:'white', backgroundColor:'#0F1035'}}>
            Apply</Button>
            
            <Button onClick={handleResetFilter}
            sx={{ marginTop: '16px', marginRight: '16px', color:'white', backgroundColor:'#7FC7D9 '}}>
            Reset</Button>
            </Grid>

            </AccordionDetails>

        </Accordion>
        
        </Box>
    );
};

export default StudentPositionFilter;
