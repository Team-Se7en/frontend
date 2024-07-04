import * as React from 'react';

import Pagination from '@mui/material/Pagination';
import {makeStyles} from '@mui/styles';

// Custom styles for the component
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        borderRadius: '30px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    pagination: {
        '& .MuiPaginationItem-root': {
            color: '#0F1035',
        },
        '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#0F1035',
            color: '#fff',
        },
    },
    pageInfo: {
        marginBottom: '10px',
    },
});

interface ProfessorPagination1 {
    onPageChange: (pageValue: number) => void;
}


const PaginationControlled: React.FC<ProfessorPagination1> = ({ onPageChange }) => {
    const [page, setpage] = React.useState<number>(1);
    

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        onPageChange(value);
        setpage(value);

    };

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Pagination
                count={10}
                page={page}
                onChange={handleChange}
                className={classes.pagination}
            />
        </div>
    );
}

export default PaginationControlled;


// export default function PaginationControlled({onSetPage}: any, {onPageChange}:any): JSX.Element {
//     const classes = useStyles();
//     // const [page, setPage] = React.useState(1);

//     const handleChange = (_: React.ChangeEvent<unknown>, value: number): void => {
//         console.log(value, "pagination component");
//         onSetPage(value);
        
    
//     };

//     return (
//         <div className={classes.root}>

//             <Pagination
//                 count={10}
//                 page={onPageChange}
//                 onChange={handleChange}
//                 className={classes.pagination}
//             />
//         </div>
//     );
// }