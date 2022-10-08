import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CrossWordView } from '../../views/CrossWordView/CrossWordView';

import { RegisterView } from '../../views/RegisterView';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        // path={'/'}
        // element={<RegisterView />}
        path={'/'}
        element={<CrossWordView />}
      />
    </Routes>
  );
};
