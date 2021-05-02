import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import React, { memo, useMemo } from 'react';
import { inputFields, useAppSelector } from '../store';
import { Title } from './Title';

export const Consents = memo(() => {
  const consents = useAppSelector((state) => state.consents.value);

  const rows = useMemo(
    () => consents.map((item, index) => ({ ...item, index: index + 1 })),
    [consents]
  );

  return (
    <>
      <Title>Collected Consents</Title>
      <GridWrapper>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={2}
          autoHeight
          loading={rows.length === 0}
        />
      </GridWrapper>
    </>
  );
});
Consents.displayName = nameof(Consents);

const th = css`
  && .MuiDataGrid-colCellTitle {
    font-weight: bold;
  }
`;

// Material has incorrect `d.ts` for «@params» in «renderCell»
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderConsentsCell = (params: any) => {
  const value = params?.value;

  return <div>{Array.isArray(value) ? value.join(', ') : value}</div>;
};

const columns: GridColDef[] = [
  { field: 'index', headerName: '#', flex: 40, headerClassName: th },
  {
    field: nameof(inputFields['name']),
    headerName: inputFields['name'],
    flex: 200,
    headerClassName: th
  },
  {
    field: nameof(inputFields['email']),
    headerName: inputFields['email'],
    flex: 150,
    headerClassName: th
  },
  {
    field: 'consentGivenFor',
    headerName: 'Consent given for',
    flex: 400,
    headerClassName: th,
    renderCell: renderConsentsCell
  }
];

const GridWrapper = styled.div`
  padding: 0 20px 20px 20px;
`;
