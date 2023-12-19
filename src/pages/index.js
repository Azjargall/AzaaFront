import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router=useRouter();
  return (
  <div className='w-full xl:h-[4500px]   h-[4000px]'>
            <div className="  w-full h-[680px] bg-[url('https://centraltv.mn/wp-content/uploads/2022/05/1.jpg')] bg-cover bg-center " > 
                <div className=" w-full h-full ">
                    <div className="flex w-full p-12 py-10 gap-36 justify-around items-center z-50">
                        <img className="h-10"
                            src="https://centraltv.mn/wp-content/uploads/2022/05/Frame-51.png"
                            alt="" />
                        <div className="gap-8 text-white text-sm font-bold items-center hidden lg:flex">
                            <a  className="text-lime-700 transition-all" href="">ЭХЛЭЛ</a>
                            <a onClick={() => router.push('/')} className="hover:text-lime-700 transition-all" href="">НЭВТРҮҮЛГҮҮД</a>
                            <a onClick={() => router.push('/huninots')} className="hover:text-lime-700 transition-all" href="">ХҮНИЙ НӨӨЦ</a>
                            <a onClick={() => router.push('/bidniituhai')} className="hover:text-lime-700 transition-all" href="">БИДНИЙ ТУХАЙ</a>
                            <a onClick={() => router.push('/hamtrah')} className="hover:text-lime-700 transition-all">ХАМТРАН АЖИЛЛАХ</a>
                        </div>
                    </div>
          

                </div>
            </div>
  <div className='w-full h-[1500px] flex dark:bg-black bg-gray-400  bg-gray-400 justify-around  xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>
    <div className='xl:w-[45%] lg:w-[45%] md:w-[45%] sm:w-full   xl:h-full flex flex-col'>
    <div className='w-full h-[6%]  flex items-center'><a className='text-2xl text-white'>Онцлох мэдээ</a></div>
      <div className='w-full h-[0.2%] bg-green-600'></div>
      <div className='w-full h-[94%] flex md:flex-row xl:flex-col lg:flex-col sm:flex-col flex-col'>
      <div className='xl:w-full lg:w-full md:w-[50%]  h-[50%] flex flex-col '>
      <div class=" xl:h-[50%]  lg:h-[40%] md:h-[15%]  xl:w-full  lg:w-full md:W-[10%]   bg-cover rounded-l mt-[5%] bg-[url('https://centraltv.mn/wp-content/uploads/2022/08/P1_Garchig-poster1.jpg')]"></div>
      <a className='text-green-600 my-[2%] font-bold text-sm'>Branding</a>
      <a className='text-white text-3xl'>“ГАРЧИГ” УРАН ЗОХИОЛЫН НЭВТРҮҮЛЭГ /II УЛИРАЛ/</a>
      <a className=' text-base my-[2%] text-slate-500'>Бид дэлхий нийтээрээ ойлголцдог цорын ганц хэлтэй. Тэр бол урлагийн хэл билээ. “Гарчиг” уран зохиолын…</a>
      <a className='text-slate-700 text-sm my-[3%]'>8 сар 25, 2022</a>
      </div>
      <div className='xl:w-full lg:w-full md:w-[50%] sm:w-full  h-[50%] flex flex-col'>
      <div class=" xl:h-[50%]  lg:h-[40%]  md:h-[15%]  xl:w-full  lg:w-full md:W-full  bg-cover rounded-l my-[5%] bg-[url('https://centraltv.mn/wp-content/uploads/2018/01/2.jpg')]"></div>
      <a className='text-green-600 my-[2%] font-bold text-sm'>Branding</a>
      <a className='text-white text-3xl'>The Маяг шинэ улирал мэндэллээ</a>
      <a className='text-slate-500 text-base my-[2%]'>Most times, ideacide happens without us even realizing it. A possible off-the-wall idea or solution…</a>
      <a className='text-slate-700 text-sm my-[3%]'>1 сар 15, 2018</a>
      </div>
      </div>
    </div>
    <div className='xl:w-[45%] lg:w-[45%] md:w-[45%] sm:w-full h-full  '>
    <div class="h-[41px] w-[178px]  mt-[5%] mb-[2%] bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/reuters-logo.png')]"></div>
    <div className='w-full h-[0.2%] bg-orange-400'></div>
    <div className='h-[93.99%] w-full flex flex-col'>
    <div className='w-full h-[11.7%] flex items-center'>
    <img
    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
    class="h-[60%] rounded-l w-[24%] transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
    <div className='h-full w-[42%] ml-[4%] flex  flex-col justify-around'>
    <a className='text-green-600 font-bold text-sm'>REUTERS</a>
    <a className='text-white font-bold font-bold text-l hover:underline '>Prince Harry and Meghan’s first Netflix project to focus on Invictus Games</a>
    <a className='text-slate-700 text-sm font-bold'>1 сар 15, 2018</a>
    </div>
    </div>
    <div className='w-full h-[11.7%] flex items-center'>
    <img
    src="https://centraltv.mn/wp-content/uploads/2022/06/10.jpg"
    class="h-[60%] rounded-l w-[24%] transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
    <div className='h-full w-[42%] ml-[4%] flex  flex-col justify-around'>
    <a className='text-green-600 font-bold text-sm'>REUTERS</a>
    <a className='text-white font-bold font-bold text-l hover:underline '>Too much Prince Philip coverage? BBC says complaints have been received</a>
    <a className='text-slate-700 text-sm font-bold'>6 сар 4, 2022</a>
    </div>
    </div>
    <div className='w-full h-[11.7%] flex items-center'>
    <img
    src="https://centraltv.mn/wp-content/uploads/2022/06/9.jpg"
    class="h-[60%] rounded-l w-[24%] transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
    <div className='h-full w-[42%] ml-[4%] flex  flex-col justify-around'>
    <a className='text-green-600 font-bold text-sm'>REUTERS</a>
    <a className='text-white font-bold font-bold text-l hover:underline '>Jazz Drama ‘Ma Rainey’ wins two prizes at BAFTAs opening night</a>
    <a className='text-slate-700 text-sm font-bold'>6 сар 4, 2022</a>
    </div>
    </div>
    <div className='w-full h-[11.7%] flex items-center'>
    <img
    src="https://centraltv.mn/wp-content/uploads/2022/06/8.jpg"
    class="h-[60%] rounded-l w-[24%] transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
    <div className='h-full w-[42%] ml-[4%] flex  flex-col justify-around'>
    <a className='text-green-600 font-bold text-sm'>REUTERS</a>
    <a className='text-white font-bold font-bold text-l hover:underline '>President Biden, Obama to appear on NBC’s vaccination special</a>
    <a className='text-slate-700 text-sm font-bold'>6 сар 2, 2022</a>
    </div>
    </div>
    <div className='w-full h-[11.7%] flex items-center'>
    <img
    src="https://centraltv.mn/wp-content/uploads/2018/01/4.jpg"
    class="h-[60%] rounded-l w-[24%] transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
    <div className='h-full w-[42%] ml-[4%] flex  flex-col justify-around'>
    <a className='text-green-600 font-bold text-sm'>REUTERS</a>
    <a className='text-white font-bold font-bold text-l hover:underline '>Masters ratings increase from 2020 but lower than usual</a>
    <a className='text-slate-700 text-sm font-bold'>6 сар 2, 2022</a>
    </div>
    </div>
    <div className='w-full h-[11.7%] flex items-center'>
    <img
    src="https://centraltv.mn/wp-content/uploads/2018/01/5.jpg"
    class="h-[60%] rounded-l w-[24%] transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
    <div className='h-full w-[42%] ml-[4%] flex  flex-col justify-around'>
    <a className='text-green-600 font-bold text-sm'>REUTERS</a>
    <a className='text-white font-bold font-bold text-l hover:underline '>Musk says he supports crypto in battle with fiat money</a>
    <a className='text-slate-700 text-sm font-bold'>1 сар 15, 2018</a>
    </div>
    </div>
    <div className='w-full h-[11.7%] flex items-center'>
    <img
    src="https://centraltv.mn/wp-content/uploads/2022/06/7.jpg"
    class="h-[60%] rounded-l w-[24%] transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
    <div className='h-full w-[42%] ml-[4%] flex  flex-col justify-around'>
    <a className='text-green-600 font-bold text-sm'>REUTERS</a>
    <a className='text-white font-bold font-bold text-l hover:underline '>Funds recommended cutting equity exposure in May to lowest level this year</a>
    <a className='text-slate-700 text-sm font-bold'>6 сар 2, 2022</a>
    </div>
    </div>
    <div className='w-full h-[11.7%] flex items-center'>
    <img
    src="https://centraltv.mn/wp-content/uploads/2017/06/6.jpg"
    class="h-[60%] rounded-l w-[24%] transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
    <div className='h-full w-[42%] ml-[4%] flex  flex-col justify-around'>
    <a className='text-green-600 font-bold text-sm'>REUTERS</a>
    <a className='text-white font-bold font-bold text-l hover:underline '>Final TV ratings for Oscars inch up to 10.4 million viewers</a>
    <a className='text-slate-700 text-sm font-bold'>6 сар 20, 2017</a>
    </div>
    </div>
    </div>
    </div>
  </div>
  <div className='w-full h-[600px] dark:bg-black bg-gray-400 flex justify-center'>
    <div className='h-full w-[95%] flex flex-col items-start'>
    <a className='my-[4%] text-white font-bold no-underline hover:underline text-2xl'>НЭВТРҮҮЛГҮҮД</a>
    <div className='w-[90%] h-[70%]  md:w-full sm:w-full  flex flex-col xl:flex-row lg:flex-row md:flex-row '>
    <div className='h-[33%] xl:h-full lg:h-full md:h-full xl:w-[32%] lg:w-[32%] md:w-[32%] w-full mx-[1%] flex flex-col '>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/profit-1.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>The Profit</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/maskedsinger-3.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>The Masked Singer</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/fifa.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>FIFA 2020</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/rat-in-the-kitchen.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Rat In The kitchen</a>
      </div>
      <div className='w-full h-[20%] flex items-center justify-around border-t-2 border-slate-300 border-b-2'>
      <img src="https://centraltv.mn/wp-content/uploads/2022/05/irgen.png" alt="Description" class="w-[20%] h-[50%]"/>
      <a className='text-white hover:text-green-600'>Иргэн</a>
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
  <div className='w-full h-[800px] sm:h-[1100px] bg-black flex items-center justify-evenly flex-col'>
    <a className='text-white font-bold text-2xl'>ХАМТРАГЧ БАЙГУУЛЛАГА</a>
    <div className='h-full xl:h-[40%] lg:h-[40%] md:h-[40%] w-[90%] gap-2 grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 grid-cols-1'>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/1.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/2-1.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/3.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/4.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/6.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/5.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/7.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/8.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/9-2.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/10.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/11.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/12.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/13.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/14.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/15.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/16.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/17-2.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/16.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/19.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/20.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/21.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/22.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/23.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/23.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/24-1.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/25.png')] bg-no-repeat"></div>
      <div className="flex bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/26.png')] bg-no-repeat"></div>
    </div>
  </div>
  <div className="w-full h-[500px] bg-cover bg-center bg-[url('https://i.pinimg.com/736x/a6/ed/93/a6ed9347a5562dfae1457512ba647023.jpg')] flex flex-col justify-around items-center " >
    <div className='w-[40%] h-[30%]'>
      <a className='text-white font-bold text-3xl invisible   lg:visible'>“Гэрэл бүрийн дор мөрөөдөл бий.
Тэрхүү мөрөөдлийг услах ундарга нь бид
байх болно.”</a>
    </div>
    <a className='text-green-600 text-xl invisible   lg:visible '>Гүйцэтгэх захирал</a>
    <a className='text-green-600 text-2xl font-bold invisible   lg:visible'>Page edree oligtoihon huneer hiilgeche Anhbayraa!!!</a>
  </div>
  {/* Footer */}
  <div className='h-[400px] w-full dark:bg-neutral-950 bg-gray-400'>
              <div className="w-full p-24 flex justify-around gap-[37%]">
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
