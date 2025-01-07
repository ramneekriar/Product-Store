import { Routes, Route } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';

import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';

function App() {
  return (
    <>
      <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
