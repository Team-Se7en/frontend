import * as React from 'react';

import { DataGrid, GridSortModel } from '@mui/x-data-grid';
import { UseDemoDataOptions, createFakeServer } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

const DATASET_OPTION: UseDemoDataOptions = {
  dataSet: 'Employee',
  visibleFields: VISIBLE_FIELDS,
  rowLength: 100,
};

const { useQuery, ...data } = createFakeServer(DATASET_OPTION);

export default function ProfessorSort() {
  const [queryOptions, setQueryOptions] = React.useState({});

  const handleSortModelChange = React.useCallback((sortModel: GridSortModel) => {
    // Here you save the data you need from the sort model
    setQueryOptions({ sortModel: [...sortModel] });
  }, []);

  const { isLoading, rows } = useQuery(queryOptions);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        {...data}
        sortingMode="server"
        onSortModelChange={handleSortModelChange}
        loading={isLoading}
      />
    </div>
  );
}