
import Navbar from '../src/Components/Navbar'
import Sidebar from '../src/Components/Sidebar'
import AvailableBalance from './Components/Pages/AvailableBalance'
import WalletSettings from './Components/Pages/WalletSettings'
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div><Sidebar /></div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, lineHeight: '24.2px' }}>

          <div style={{ backgroundColor: '#F5F8F8', display: 'flex', flexDirection: 'column', flex: 1, lineHeight: '24.2px' }}>
            <p style={{ marginTop: '20px', marginBottom: '15px', fontSize: '24px', fontWeight: '600', lineHeight: '36px', fontFamily: 'Poppins', textAlign: 'left', padding: '10px 90px', color: '#121114', margin: '0' }}>Zippyy wallet configuration
            </p>


            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F5F8F8', margin: '0 30px', padding: '5px' }}>
              <AvailableBalance />
              <WalletSettings />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
