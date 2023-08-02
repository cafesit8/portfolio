import { Icpna } from '../icons/social-media'

export default function IcpnaCard () {
  return (
    <div className="bg-[#ebb032ee] rounded-2xl flex flex-col sm:justify-between justify-center relative aspect-square md:p-5 p-2 animate-fade-down animate-delay-[1900ms]">
      <h3 className='text-white font-baloo400 font-medium md:text-3xl text-[20px] text-center sm:block hidden'>English Level</h3>
      <Icpna />
      <span className='text-white font-thin md:text-3xl text-[14px] text-center'>Advance</span>
    </div>
  )
}
