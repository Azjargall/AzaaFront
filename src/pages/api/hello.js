import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router=useRouter();
  return (
  <div className='w-full h-[7500px]'>
  <div className='w-full h-[1500px] flex bg-black justify-around  xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>
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
      <div class="xl:h-[50%]  lg:h-[40%]  md:h-[15%]  xl:w-full  lg:w-full md:W-full  bg-cover rounded-l my-[5%] bg-[url('https://centraltv.mn/wp-content/uploads/2018/01/2.jpg')]"></div>
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
  <div className='w-full h-[800px] bg-black flex justify-center'>
    <div className='h-full w-[95%] flex flex-col items-start'>
    <a className='my-[4%]'>НЭВТРҮҮЛГҮҮД</a>
    <div className='w-[90%] h-[90%] bg-slate-300'>
      
    </div>
    </div>
  </div>
  <div className='h-[500px] w-full bg-black'>
  <div className="w-full p-12 pb-24 flex justify-between">
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
      <div className="flex flex-col items-end">
        <button className="text-green-700 relative w-[10vw] mb-12">
          <div className="bg-gradient w-[calc(100%+4px)] rounded-sm h-[calc(100%+4px)] absolute top-[-2px] left-[-2px] z-[-1]">
          </div>
          <div className="w-full h-full bg-offblack p-2 py-3 transition-all hover:bg-transparent hover:text-white">
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
