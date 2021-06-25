import React, {Fragment} from 'react';
import Navbar from './NavBar';

export const Layout = ({children}) => {
  return (
    <Fragment>
      <Navbar />
      <main className="container py-4">
        {children}
      </main>
    </Fragment>
  )
}
