import Link from 'next/link';


const NotFound = () => {
  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
        <h2 className='text-center'><span style={{fontSize: '5rem'}}>404</span> <br /> Page not found</h2>
        <p className="text-center">Check the url properly and try again.</p>
        <Link href="/" style={{background: 'transparent', border: '1px solid black', borderRadius: '4px', color: 'black', paddingBlock: '.8rem', paddingInline: '1.5rem', textDecoration: 'none'}}>Go back to home</Link>
    </div>
  )
}

export default NotFound;