import Image from 'next/image'

function Logo() {
  return (
    <div className='flex cursor-pointer items-center space-x-3'>
      <Image src='/logo.png' width={40} height={40} />
      <span className=''>BluTang.io</span>
    </div>
  )
}

export default Logo
