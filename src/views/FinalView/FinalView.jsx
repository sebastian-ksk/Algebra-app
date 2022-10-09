import { Grid } from '@mui/material';
import React from 'react';
import { CSVLink } from 'react-csv';
import { Layout } from './Layout';

export const FinalView = () => {
  const headers = [
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'Age', key: 'age' },
  ];
  const datacsv = [
    {
      firstName: 'Warren',
      lastName: 'Morrow',
      email: 'sokyt@mailinator.com',
      age: '36',
    },
    {
      firstName: 'Gwendolyn',
      lastName: 'Galloway',
      email: 'weciz@mailinator.com',
      age: '76',
    },
    {
      firstName: 'Astra',
      lastName: 'Wyatt',
      email: 'quvyn@mailinator.com',
      age: '57',
    },
  ];
  const csvReport = {
    data: datacsv,
    headers: headers,
    filename: 'Results.csv',
  };

  return (
    <Layout title='Resuelve el Crucigrama'>
      <Grid
        sx={{ marginTop: 8 }}
        container
        justifyContent='center'
      >
        <Grid
          item
          xs={8}
          sx={{ mt: 2 }}
          spacing={3}
        >
          <CSVLink {...csvReport}>Export to CSV</CSVLink>
        </Grid>
      </Grid>
    </Layout>
  );
};
