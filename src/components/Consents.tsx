import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import React, { memo } from 'react';
import { ConsentVariants, inputFields } from './interface';
import { Title } from './Layout/Title';

export const Consents = memo(() => {
  return (
    <>
      <Title>Collected Consents</Title>
      <GridWrapper>
        <DataGrid rows={rows} columns={columns} pageSize={2} autoHeight />
      </GridWrapper>
    </>
  );
});
Consents.displayName = nameof(Consents);

type Consent = typeof inputFields & {
  id: number;
  index: string;
  consentGivenFor: ConsentVariants[];
};

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
    field: inputFields['email'],
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

const rows: Consent[] = [
  {
    id: 1,
    index: '1',
    name: 'name',
    email: 'email',
    consentGivenFor: [
      ConsentVariants.BeShownTargetedAs,
      ConsentVariants.ContributeToAnonymousVisitStatistics,
      ConsentVariants.ReceiveNewsletters
    ]
  },
  {
    id: 2,
    index: '2',
    name: 'is Awesome',
    email: 'email',
    consentGivenFor: []
  },
  {
    id: 3,
    index: '3',
    name: 'is Amazing',
    email: 'email',
    consentGivenFor: []
  }
];

const GridWrapper = styled.div`
  padding: 0 20px 20px 20px;
`;
