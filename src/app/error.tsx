"use client"

import { ErrorOutlineRounded } from "@mui/icons-material";

const Error = (error) => {
  // console.log(error.error.message);
  return (
    <div id='productsContent' style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0'}}>
      <h1 style={{color: 'red', fontSize: '2rem'}}> <ErrorOutlineRounded /> ERROR!</h1>
      <h2 style={{color: 'gray'}}>{error?.error?.message || "There has been a glitch in the process. Could not fetch products!"}</h2>
      <button onClick={() => window.location.reload()} style={{background: 'transparent', border: '1px solid black', borderRadius: '4px', color: 'black', paddingBlock: '.8rem', paddingInline: '1.5rem', textDecoration: 'none'}}>
        Try again
      </button>
    </div>
  )
}

export default Error;