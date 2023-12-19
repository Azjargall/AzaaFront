import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
    const router=useRouter();
    
    return (
      <div className='w-full h-screen dark:bg-black  bg-gray-400'>
           <div className=" bg-cyan-400 w-full h-[680px] bg-[url(https://m.buro247.mn/thumb/750x480_5/images/centraltvrub.jpg)] bg-cover bg-center " >
                <div className="w-full h-full ">
                    <div className="flex w-full p-12 py-10 gap-36 justify-around items-center z-50">
                        <img className="h-10"
                            src="https://centraltv.mn/wp-content/uploads/2022/05/Frame-51.png"
                            alt="" />
                        <div className="gap-8 text-white text-sm font-bold items-center hidden lg:flex">
                          <Link href='/'>
                            <button  className="hover:text-lime-700 transition-all " >ЭХЛЭЛ</button></Link>
                            <Link href='/rout3'>
                            <button  className="hover:text-lime-700 transition-all " >НЭВТРҮҮЛГҮҮД</button></Link>
                            <Link href='/huninots'>
                            <button className="hover:text-lime-700 transition-all"/>ХҮНИЙ НӨӨЦ</Link>
                            <a className="text-lime-700 transition-all">БИДНИЙ ТУХАЙ</a>
                            <Link href='/hamtrah'>
                            <button className="hover:text-lime-700 transition-all" />ХАМТРАН АЖИЛЛАХ</Link>
                        </div>
                    </div>
                </div>
            </div>
          <div className='w-full h-full flex dark:bg-black bg-slate-400 justify-around'>
          <div className='text-slate-50 font-light text-lg text-justify mt-16 w-3/5 leading-8 '>
              <p>“Централ телевиз” нь соёл, урлаг, спорт, шинжлэх ухаан, танин мэдэхүй нэвтрүүлэг хөтөлбөрөөр гоо зүйн боловсрол олгох зорилготой бүрэн энтертайнмент суваг юм. Бид оюуны өмчийг дээдлэн, ёс зүйн хэм хэмжээг баримталж, дотоод, гадаадын телевизүүдийн нэвтрүүлэг, инээдмийн болон хүүхдийн цуврал бүтээлүүдийг онцгой эрхтэйгээр үзэгч олондоо зориулан бүтээж, нэвтрүүлж байна.</p>
              <div className='flex flex-col mt-8 gap-4'>
              <div className='text-lime-600 text-sm text-left mt-10'>Эрхэм зорилго</div>
              <div className=" bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/vision-1.png')] bg-no-repeat bg-center w-72 h-12 relative right-7 bottom-4" >.</div>
              <div className='text-lime-600 text-sm text-left'>Алсын хараа</div>
              <div className=" bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/Slogan-2.png')] bg-no-repeat h-24" >.</div>
              <div className='text-lime-600 text-sm text-left'>Үнэ цэнэ</div>
              <div className=" bg-[url('https://centraltv.mn/wp-content/uploads/2022/06/value-1.png')] bg-no-repeat h-32" >.</div>
              <div className='mt-12'></div>
              <div className='grid grid-cols-2'>
                <div className=" row-span-2">
                
                </div>
                
  
              </div>
            </div>
              
  
            </div>
  
          </div>
          <div className='w-full h-full flex dark:bg-black bg-slate-400 flex flex-col xl:flex-row lg:flex-row md:flex-row'>
         <div className='w-[50%]  flex items-start justify-center sm:w-full h-[33%] xl:h-full lg:h-full md:h-full'>
          <div className="w-[90%] h-[90%] bg-[url('https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80')] bg-cover hover:bg-[url('https://img.freepik.com/photos-premium/champ-champ-fleurs-montagnes-arriere-plan_885092-89.jpg?w=360')]"></div>
         </div>
         <div className='w-[50%] h-full flex jutify-center flex-col sm:w-full h-[66%] xl:h-full lg:h-full md:h-full'>
          <div className='w-full h-[50%] flex items-center justify-center'>
          <div className="w-[90%] h-[90%] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7p5mI_xHMhOXWhSHQxE4IqdnIhtqbvmjBxKBEhOpxIYQ1jIVedVuD44J_AGOw2rC49A&usqp=CAU')] bg-cover hover:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQfaRP-JexKsXD2YE0-a8rRZ0LZwvNzxLFZFwpI0EjAliM4Z1iLDaZRFyDAtUnPkDotU&usqp=CAU')]"></div>
          </div>
          <div className='w-full h-[50%] flex items-center justify-center'>
          <div className="w-[90%] h-[90%] bg-[url('https://img.freepik.com/photos-premium/beau-paysage-ruisseau-prairie-montagnes_926199-139478.jpg')] bg-cover hover:bg-[url('https://img.freepik.com/photos-premium/champ-champ-fleurs-montagnes-arriere-plan_885092-89.jpg?w=360')]"></div>
          </div>
         </div>
          </div>
          <div className='w-full h-[800px] sm:h-[1100px] flex dark:bg-black bg-slate-400 flex items-center justify-evenly flex-col'>
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