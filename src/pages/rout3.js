import Link from 'next/link'; 

export default function rout() {
    return(
        <div className="h-full w-full dark:bg-black bg-gray-400 flex flex-col items-center">
            <div className="flex w-full p-12 py-10 gap-36 justify-around items-center z-50">
                        <img className="h-10"
                            src="https://centraltv.mn/wp-content/uploads/2022/05/Frame-51.png"
                            alt="" />
                        <div className="gap-8 text-white text-sm font-bold items-center hidden lg:flex">
                          <Link href='/'>
                            <button  className="hover:text-lime-700 transition-all " >ЭХЛЭЛ</button></Link>
                            <a className="text-lime-700 transition-all">НЭВТРҮҮЛГҮҮД</a>
                            <Link href='/huninots'>
                            <button className="hover:text-lime-700 transition-all"/>ХҮНИЙ НӨӨЦ</Link>
                            <Link href='/'>
                            <button  className="hover:text-lime-700 transition-all " >БИДНИЙ ТУХАЙ</button></Link>
                            <Link href='/hamtrah'>
                            <button className="hover:text-lime-700 transition-all" />ХАМТРАН АЖИЛЛАХ</Link>
                        </div>
            </div>
            <div className='w-full h-[600px] dark:bg-black bg-gray-400 flex justify-center'>
    <div className='h-full w-[95%] flex flex-col items-start'>
    <a className='my-[4%] dark:text-white text-black font-bold no-underline hover:underline text-2xl'>НЭВТРҮҮЛГҮҮД</a>
    <div className='w-[90%] h-[70%]  md:w-full sm:w-full  flex flex-col xl:flex-row lg:flex-row md:flex-row '>
    <div className='h-[33%] xl:h-full lg:h-full md:h-full xl:w-[32%] lg:w-[32%] md:w-[32%] w-full mx-[1%] flex flex-col '>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/profit-1.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='dark:text-white text-black hover:text-green-600'>The Profit</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/maskedsinger-3.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='dark:text-white text-black hover:text-green-600'>The Masked Singer</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/fifa.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='dark:text-white text-black hover:text-green-600'>FIFA 2020</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/rat-in-the-kitchen.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='dark:text-white text-black hover:text-green-600'>Rat In The kitchen</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/irgen.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='dark:text-white text-black hover:text-green-600'>Иргэн</a>
      </div>
    </div>
    <div className='h-[33%] xl:h-full lg:h-full md:h-full xl:w-[32%] lg:w-[32%] md:w-[32%] w-full mx-[1%] flex flex-col'>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/tavantsagirag-1.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>5 Алтан Цагираг</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/savetheplanet.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Save The Planet Season 2</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/paradiso-2.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Paradiso Season 3</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/mongoluv.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Монгол өв соёл Season 3</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/thedailyshow.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>The Daily Show Season 2</a>
      </div>
    </div>
    <div className='h-[33%] xl:h-full lg:h-full md:h-full xl:w-[32%] lg:w-[32%] md:w-[32%] w-full mx-[1%] flex flex-col'>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/garchig-1.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Гарчиг</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/tomtoo.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Том Тоо Season 2</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/themayg.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>The Маяг Season 2The Маяг Season 2</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/vista.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Vista / Интерьер шоу</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/thedailyshow.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Пластик арал /Хог хаягдлын шоу</a>
      </div>
    </div>
    </div>
  </div>

            </div>
            <div className='w-[95%] h-[2600px] grid grid-cols-1 xl:grid-cols-2 gap-4 lg:grid-cols-2 md:grid-cols-2'>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/garchig.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/v1_270.png')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/irgen.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/rat.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/savetheplanet.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/08/WEbsite_cover.png')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/tomtoo.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2018/01/2.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/maskedsinger.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/orcool.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/vista.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/fifa.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
                <div className="flex bg-cover bg-center bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/paradiso.jpg')] transform transition-transform duration-100 ease-in-out hover:scale-110"></div>
            </div>
            <div className='h-[300px] w-full dark:bg-neutral-950 bg-gray-400'>
                <div className="w-full py-12 flex justify-around gap-[20%]">
                  <div>
                    <img src="https://centraltv.mn/wp-content/uploads/2022/05/Be-The-Core-1.png" alt="" />
                    <div className="flex mt-8">
                      <a className="hover:brightness-90 transition-all" href="https://www.instagram.com/centraltv.mn/?hl=en">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/05/instagram-logo-1.png" alt="" />
                      </a>
                      <a className="hover:brightness-90 transition-all ml-5" href="https://www.facebook.com/centraltv.mn/">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/05/facebook-1.png" alt="" />
                      </a>
                      <a className="hover:brightness-90 transition-all ml-5" href="https://www.linkedin.com/company/central-television">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/05/linkedin-1.png" alt="" />
                      </a>
                      <a className="hover:brightness-90 transition-all ml-5" href="https://www.youtube.com/c/CentralTelevisionMongolia">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/05/youtube-1.png" alt="" />
                      </a>
                    </div>
                    <div className="mt-8">
                      <img src="https://centraltv.mn/wp-content/uploads/2022/06/copyright.svg" alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-end invisible   lg:visible ">
                    <button className="text-lime-600 relative w- mb-12">
                      <div className="w-full h-full rounded-md border-lime-600  border-2 p-2 py-3 hover:bg-lime-600  bg-transparent hover:text-white">
                        Contact Us
                      </div>
                    </button>
                    <img src="https://centraltv.mn/wp-content/uploads/2022/06/hmm.svg" alt="" />
                  </div>
              </div>
              </div>
        </div>
    )
}