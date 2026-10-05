import Link from 'next/link'
import { FaTicketAlt } from 'react-icons/fa'

const Homepage = () => {
  return (
    <main className='flex flex-col text-center items-center justify-center min-h-screen px-4'>
      <FaTicketAlt className='text-red-600 mb-4 mx-auto' size={60} />
      <h1 className='text-4xl md:text-5xl font-bold mb-4 text-blue-600'>
        Welcome to the Ticket Manager
      </h1>
      <p className='text-lg text-gray-600 mb-8'>
        Manage your tickets efficiently.
      </p>

      <div className='flex flex-col-md:flex-row gap-4 justify-center animate-slide opacity-0'>
        <Link
          href='/tickets/new'
          className='bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition'>
          Submit a Ticket
        </Link>
        <Link
          href='/tickets'
          className='bg-blue-200 text-gray-700 py-3 px-6 rounded shadow hover:bg-blue-200 transition'>
          View Tickets
        </Link>
      </div>
    </main>
  )
}

export default Homepage
