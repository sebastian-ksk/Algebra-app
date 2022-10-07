import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterView } from '../../views/RegisterView';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<RegisterView />}
      />
    </Routes>
  );
};
