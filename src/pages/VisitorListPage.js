import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import VisitorTabs from '../components/VisitorTabs/VisitorTabs';

class VisitorListPage extends React.Component {

  render() {

    return (
      <main>
        <NavBar />
        <VisitorTabs />
      </main>
    );
  }
}

export default VisitorListPage;