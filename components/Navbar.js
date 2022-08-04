import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='w-screen '>

      <nav className='flex justify-evenly font-bold uppercase py-4 border-b-[1px]'>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/aboutus">aboutus</Link>
      </nav>
    </div>
  )
}

export default Navbar