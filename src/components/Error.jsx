

/* eslint-disable react/prop-types */
const Error = ()=>{
    return <section style={{display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', background: '#000' }}>
      <h1 style={{font: 'bold', color: 'red', fontSize: '2rem'}}>Error!!!</h1>
      <p style={{font: 'bold', fontSize: '1.4rem', color: 'white'}}>Something went wrong</p>
      

    </section>
  };
const ErrorFallBack = ({ error, resetErrorBoundary })=>{
    return <section style={{display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', background: '#000' }}>
      <h1 style={{font: 'bold', color: 'red', fontSize: '2rem'}}>Error!!!</h1>
      <p style={{font: 'bold', fontSize: '1.4rem', color: 'white'}}>Something went wrong</p>
      <p style={{font: 'bold', fontSize: '1.4rem', color: 'white'}}>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>

    </section>
  };



  export default  {
    Error,
    ErrorFallBack
  };