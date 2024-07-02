import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Slider,
    Typography
} from '@mui/material';
import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FilterProps {
    onStudentFilter: (filter: FilterOptions) => void;
}

interface FilterOptions {
    filled: number;
    term: ('spring' | 'summer' | 'winter')[];
    feeMin: number;
    feeMax: number;
    year: number[];
}

const StudentPositionFilter: React.FC<FilterProps> = ({
    onStudentFilter }) => {
    const [term, setTerm] = useState<FilterOptions['term']>([]);
    const [feeMin, setFeeMin] = useState<number>(0);
    const [feeMax, setFeeMax] = useState<number>(30000);
    const [year, setYear] = useState<number[]>([]);
    const [filled, setfilled] = useState<number>(-1);
    const isfilledOptions: ('Yes' | 'No')[] = ['Yes', 'No'];
    const [expanded, setExpanded] = useState<boolean>(true);

    const toggleIsfilledOption = (option: 'Yes' | 'No') => {
            if (option === 'Yes') {
                if (filled === 1) {
                    setfilled(-1);
                }
                else{
                    setfilled(1);

                }
                
            } else {
                if (filled === 0) {
                    setfilled(-1);
                }
                else{
                    setfilled(0);

                }            }
    };

    const handleApplyFilter = () => {
        const filter: FilterOptions = {
            filled,
            term,
            feeMin,
            feeMax,
            year,
        };
        onStudentFilter(filter);
    };

    const handleResetFilter = () => {
        setfilled(-1);
        setTerm([]);
        setFeeMin(0);
        setFeeMax(30000);
        setYear([]);
        onStudentFilter({ term: [], feeMin: 0, feeMax: 30000, year: [],filled:0 });

    };


    const handleToggleAccordion = () => {
        setExpanded((prev) => !prev);
    };
    
    return (
        <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: '8px', marginLeft:'32px',
        width: '85%',height: '25%',
        }}>

<Accordion
        expanded={expanded}
        onChange={handleToggleAccordion}
        sx={{ width: "100%" }}
        >
            
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
            display: "flex",
            padding: "16px",
            width: "100%",
            height: "100%",
        }}
        >
        Filter
        </AccordionSummary>
        
        <Grid
            sx={{ display: "flex", flexDirection: "row", paddingTop: "24px" }}
        >
            <Button
                onClick={handleApplyFilter}
                size="small"
                sx={{
                color: "white",
                backgroundColor: "#0F1035",
                fontSize: "0.75rem",
                margin: "4px 4px",
                height: "32px",
            }}
            >
            Apply
            </Button>

            <Button
                onClick={handleResetFilter}
                size="small"
                sx={{
                color: "white",
                backgroundColor: "#7FC7D9",
                fontSize: "0.75rem",
                margin: "4px 4px",
                height: "32px",
            }}
            >
                Reset
            </Button>
        </Grid>
        </Grid>

        
        <Divider sx={{ width: '100%', my: 2 ,backgroundColor:"#0F1035"}} />

        <AccordionDetails>

            <Grid
            spacing={2}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'}}>
                
            <Grid
            item
            xs={12}
            md={4}>
                <Typography>Is filled</Typography>
                {isfilledOptions.map((isfilledOptions) => (

                    <FormControlLabel
                        key={isfilledOptions}
                        control={<Checkbox checked={filled == -1 ?false: (isfilledOptions === 'Yes' ? (filled ? true : false) : (filled ? false : true))}
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
                    
                    <Typography>Term</Typography>
                    <FormControlLabel
                        control={
                        <Checkbox checked={term.includes('spring')}
                        onChange={() =>
                            setTerm(prev => prev.includes('spring')
                            ? prev.filter(t => t !== 'spring')
                            : [...prev, 'spring']
                        )
                    
                    }
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
                        control={<Checkbox checked={term.includes('winter')}
                        onChange={() => setTerm(prev => prev.includes('winter') ? prev.filter(t => t !== 'winter') : [...prev, 'winter'])}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: '1rem' 
                            }
                        }}
                        />}
                        label="winter"
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
                    <Typography >Year</Typography>
                    {[2024, 2025, 2026].map((y) => (
                        <FormControlLabel
                            key={y}
                            control={
                            <Checkbox checked={year.includes(y)}
                            onChange={() =>
                                setYear(prev => prev.includes(y)
                                ? prev.filter(n => n !== y)
                                : [...prev, y])}
                                
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
                        sx={{marginTop:'16px',paddingRight:"2px", paddingLeft:"2px",color: '#0F1035',width:'300px',}}
                        value={[feeMin, feeMax]}
                        onChange={(_, newValue) => {
                        if (Array.isArray(newValue) && newValue.length === 2) {
                            setFeeMin(newValue[0]);
                            setFeeMax(newValue[1]);
                                }
                            }}
                            min={0}
                            max={30000}
                            valueLabelDisplay="on"
                        />

                    <Typography 
                    sx={{ color: 'gray', width:'200px',}}
                    >{`Fee: ${feeMin}$ - ${feeMax}$`}</Typography>

                </Grid>
            </Grid>

            </AccordionDetails>

        </Accordion>
        
        </Box>
    );
};

export default StudentPositionFilter;
