import * as React from 'react';

import {
    DataGridPro,
    FilterColumnsArgs,
    GetColumnForNewFilterArgs,
    GridToolbar,
} from '@mui/x-data-grid-pro';

import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function ProfessorFilter() {
    const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
});

const filterColumns = ({ field, columns, currentFilters }: FilterColumnsArgs) => {
    const filteredFields = currentFilters?.map((item) => item.field);
    return columns
    .filter(
        (colDef) =>
        colDef.filterable &&
        (colDef.field === field || !filteredFields.includes(colDef.field)),
    )
    .map((column) => column.field);
};

const getColumnForNewFilter = ({
    currentFilters,
    columns,
}: GetColumnForNewFilterArgs) => {
    const filteredFields = currentFilters?.map(({ field }) => field);
    const columnForNewFilter = columns
    .filter(
        (colDef) => colDef.filterable && !filteredFields.includes(colDef.field),
    )
    .find((colDef) => colDef.filterOperators?.length);
    return columnForNewFilter?.field ?? null;
};

return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGridPro
        {...data}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
        filterPanel: {
            filterFormProps: {
            filterColumns,
            },
            getColumnForNewFilter,
        },
        }}
    />
    </div>
);
}
