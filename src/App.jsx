// import { useEffect, useState } from 'react'
import './App.css'
import ErrorBoundary from './ErrorBoundary'
// import { ErrorBoundary } from "react-error-boundary";
import Users from './Users'
// import Error from './components/Error';
// import UploadComp from './components/UploadComp'

function App() {
 


  return (
    <ErrorBoundary >
      <Users/>
    </ErrorBoundary>
    
  )
}

export default App
