import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
      <div className="dark:bg-neutral-950 bg-gray-400 flex flex-col items-center justify-center">
            {/* Zuragtai heseg */}
            <div className=" bg-cyan-400 w-full h-[680px] bg-[url(https://centraltv.mn/wp-content/uploads/2022/06/Мод-1.png?id=1056)] bg-cover bg-center " >
                <div className="bg-black  opacity-75 w-full h-full ">
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
                            <Link href='/bidniituhai'>
                            <button className="hover:text-lime-700 transition-all" />БИДНИЙ ТУХАЙ</Link>
                            <a className="text-lime-700 transition-all" href="Hamtranajillah.html">ХАМТРАН АЖИЛЛАХ</a>
                        </div>
                    </div>
                    <div className="flex justify-center w-full items-center mt-[178px] h-24 gap-3 flex-col">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/%D0%B1%D0%B8%D0%B4%D1%8D%D0%BD%D1%82%D1%8D%D0%B9.png" className="  bg-cover bg-center relative top-[1.5px]" alt="" />
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/%D1%85%D0%B0%D0%BC%D1%82%D1%80%D0%B0%D0%BD-%D0%B0%D0%B6%D0%B8%D0%BB%D0%BB%D0%B0%D1%85-1.png" className=" bg-cover bg-center " alt="" />
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-96 px-12 md:flex-row text-white mt-[50px] text-sm max-w-[960px] lg:max-w-[1200px] ">
                <div className="">
                    <p className="text-2xl text-lime-600 ">РЕКЛАМ, ЗАР СУРТАЛЧИЛГАА</p>
                    <p className="top-[30px] relative leading-8 text-sm dark:text-white text-black ">Дараах үйлчилгээгээр хамтран ажиллах боломжтой бөгөөд <br /> хамтран ажиллах хүсэлт илгээх хэсэгт саналаа илгээнэ үү.</p>
                    <p className="relative top-[60px] leading-8 text-[15px] font-light dark:text-zinc-400 text-black ">• Зар сурталчилгааны үнийн санал<br />
                        • Төлбөртэй нэвтрүүлэг/богино хэмжээний бичлэг<br />
                        • Төлбөртэй зочин<br />
                        • Төлбөртэй сурталчилгаа бэлтгэх үйлчилгээ<br />
                        • Шууд дамжуулалт<br />
                        • Бусад үйлчилгээ</p>
                </div>
                <div className="">
                    <p className="text-blue-500 text-2xl">КОНТЕНТЫН ХАМТЫН АЖИЛЛАГАА</p>
                    <p className="top-[30px] relative leading-8 text-sm text-black dark:text-white">Дараах нэвтрүүлгүүдээр бизнесийн байгууллага, хамт олонтой <br /> хамтран ажиллах боломжтой.</p>
                    <p className="relative top-[60px] leading-8 text-[15px] font-light dark:text-zinc-400 text-black">• Шоу нэвтрүүлгүүд:<br />
                        • Албан ёсны эрхтэй гадаадын шоу нэвтрүүлгүүд<br />
                        • “Централ” телевизийн бүтээсэн “Central Originals” шоу <br /> нэвтрүүлгүүд<br />
                        • Өдрийн хөтөлбөрт /Daily Show S2/<br />
                        • Шууд дамжуулалт<br />
                        • Наадам<br />
                        • Цагаан сар<br />
                        • Шинэ жил</p>
                </div>
            </div>
            {/* holboo barih */}
            <div className="flex flex-col justify-center gap-8 items-center w-full mt-28">
                <img src="https://centraltv.mn/wp-content/uploads/2022/06/%D1%85%D0%BE%D0%BB%D0%B1%D0%BE%D0%BE-%D0%B1%D0%B0%D1%80%D0%B8%D1%85.png" alt="" />
                <img src="https://centraltv.mn/wp-content/uploads/2022/06/Vector-1.png" alt="" />
                <img src="https://centraltv.mn/wp-content/uploads/2023/10/info.png" alt="" />
                <img src="https://centraltv.mn/wp-content/uploads/2022/06/Vector-4.png" alt="" />
                <img className="" src="https://centraltv.mn/wp-content/uploads/2022/06/Vector-5.png" alt="" />
            </div>
            {/* form */}
            <div className="w-full flex-col flex items-center relative left-[6%]">
                <div className="flex flex-col dark:text-white text-black gap-[23px] mt-[60px] w-5/6 lg:min-w-[960px] ">
                    <p>Таны нэр</p>
                    <input type="text" className="rounded w-2/3 h-[50px] bg-neutral-900 hover:border-lime-600 border-solid border-zinc-700 border-[1px] " />
                    <p>Имейл</p>
                    <input type="text" className="rounded w-2/3 h-[50px] bg-neutral-900 hover:border-lime-600 border-solid  border-zinc-700 border-[1px]" />
                    <p>Гарчиг</p>
                    <input type="text" className="rounded w-2/3 h-[50px] bg-neutral-900 hover:border-lime-600 active:border-lime-600 border-solid  border-zinc-700 border-[1px]" />
                    <p>5 + 4 =</p>
                    <input type="text" className="rounded w-2/3 h-[50px] bg-neutral-900 hover:border-lime-600 focus:border-lime-600  border-solid  border-zinc-700 border-[1px]" />
                    <p className="mt-10">Зурвас</p>
                    <input type="text" className="rounded w-5/6 h-[257px] bg-neutral-900 border-solid hover:border-lime-600  border-zinc-700 border-[1px]" />
                    <button type="submit" class="bg-lime-700 mt-8 w-36 h-12 rounded important text-white">Илгээх</button>
                </div>
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
        
  );
} 