import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { css } from 'linaria';
import React, { memo } from 'react';
import { Title } from './Layout/Title';

export const Consents = memo(() => {
  return (
    <>
      <Title>Collected Consents</Title>
      <DataGrid rows={rows} columns={columns} pageSize={2} autoHeight />
    </>
  );
});
Consents.displayName = nameof(Consents);

enum ConsentVariants {
  ReceiveNewsletters = 'Receive newsletters',
  BeShownTargetedAs = 'Be shown targeted as',
  ContributeToAnonymousVisitStatistics = 'Contribute to anonymous visit statistics'
}

interface Consent {
  id: number;
  index: string;
  name: string;
  email: string;
  consentGivenFor: ConsentVariants[];
}

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
  { field: 'name', headerName: 'Name', flex: 200, headerClassName: th },
  { field: 'email', headerName: 'Email', flex: 150, headerClassName: th },
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
      ConsentVariants.ReceiveNewsletters,
      ConsentVariants.ContributeToAnonymousVisitStatistics
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
