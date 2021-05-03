import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import React, { memo } from 'react';
import { ConsentServer, inputFields } from '../../store';
import { Title } from '../Title';

type ConsentsViewProps = {
  rows: ConsentServer[];
};

/**
 * Consents - table view
 */
export const ConsentsView = memo<ConsentsViewProps>(({ rows }) => (
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
));
ConsentsView.displayName = nameof(ConsentsView);

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
