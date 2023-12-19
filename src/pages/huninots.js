import Link from "next/link"

export default function Home() {
    return (
        <div className="bg-neutral-950 h-screen">
            <div
                className="w-full flex flex-col gap-4 relative justify-center bg-shadow items-center h-[75%] bg-cover bg-[url('http://centraltv.mn/wp-content/uploads/2022/06/Rectangle-29.jpg?id=1434')]">
                <div className="w-full h-full absolute top-0 left-0 ">
                <div className="flex w-full p-12 py-10 gap-36 justify-around items-center z-50">
                          <img className="h-10"
                              src="https://centraltv.mn/wp-content/uploads/2022/05/Frame-51.png"
                              alt="" />
                          <div className="gap-8 text-white text-sm font-bold items-center hidden lg:flex">
                           <Link href='/'>
                            <button  className="hover:text-lime-700 transition-all " >ЭХЛЭЛ</button></Link>
                            <Link href='/rout3'>
                            <button  className="hover:text-lime-700 transition-all " >НЭВТРҮҮЛГҮҮД</button></Link>
                            <a className="text-lime-700 transition-all">ХҮНИЙ НӨӨЦ</a>
                            <Link href='/bidniituhai'>
                            <button className="hover:text-lime-700 transition-all" />БИДНИЙ ТУХАЙ</Link>
                            <Link href='/hamtrah'>
                            <button className="hover:text-lime-700 transition-all"/>ХАМТРАН АЖИЛЛАХ</Link>

                        </div>
                      </div>
                </div>
                <img className="mt-12 z-10" src="https://centraltv.mn/wp-content/uploads/2022/06/1.svg" alt="" />
                <img className="z-10" src="https://centraltv.mn/wp-content/uploads/2022/06/Bethecore-1.svg" alt="" />
                <p className="text-white w-[90%] font-light text-center mt-8 z-10">“Централ ТВ” нь Монголын телевизийн салбарт 100% энтертайнмент, танин мэдэхүй, урлаг уран сайхан гоо зүйг олгохоор оюуны
                    өмчийн онцгой эрхтэйгээр гадаадын болон дотоодын бүтээлийг үйлдвэрлэж танд хүргэх болно. Албан ёсны онцгой эрхтэйгээр
                    хамтран ажиллаж буй дэлхийн алдартай телевизийн нэвтрүүлэг, инээдмийн цуврал болон хүүхдийн цувралуудыг танд хүргэнэ.</p>
            </div>
  
            <div className="w-full dark:bg-neutral-950 bg-gray-400 p-12 gap-20 flex flex-col items-center">
                <div className="flex flex-col md:flex-row text-white font-light justify-between max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/First-captain-1.png" alt="" />
                        <p className="mt-8">Энэ бол ахмадын өрөө. Манайхныг нэг хөлгийнхөн гэж үзвэл удирдлагын өрөөнөөс бүхий л шийдвэр гарна.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/hr-2.jpg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row text-white font-light justify-between mt-12 max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/Content-busters-1.png" alt="" />
                        <p className="mt-8">Манай телевизийн нэвтрүүлэг, хөтөлбөрийн хуваарийг энд төлөвлөж, дэлхийд цуутай “Ройтерс” агентлагийн мэдээ, мэдээллийг
                            орчуулж, хянан тохиолдуулдаг юм.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/ZURAG1.jpg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row text-white font-light justify-between mt-12 max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/Creative-club-2.png" alt="" />
                        <p className="mt-8">Продюсер, сэтгүүлчдийн баг “Монгол өв соёл”, “Парадисо”, “Сайн уу, Зөвлөх өө?”, “5 алтан цагариг”, “Хөдөлгүүр”, “Том
                            тоо”, “Гарчиг”, “The Маяг”, “The profit”, “The Masked singer” зэрэг нэвтрүүлгийг төлөвлөж, жорыг нь тааруулна.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/Rectangle-39-1.jpg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row text-white font-light justify-between mt-12 max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/Daily-devils.png" alt="" />
                        <p className="mt-8">“Daily show”-ы баг энэ өрөөнд ажиллаж, шинэ соргог, сонирхолтой хөтөлбөр бэлтгэхээр цаг наргүй ажилладаг.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/Rectangle-40.jpg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row text-white font-light justify-between mt-12 max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/Puzzle-and-dazzle.png" alt="" />
                        <p className="mt-8">Нэвтрүүлэг, контентуудын эвлүүлэг, компьютер графикийн ажил тасралтгүй ундарч үзэгчдийн үзэх дуртай хөтөлбөрүүд эндээс
                  мэндэлдэг.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/hr-4.jpg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row text-white font-light justify-between mt-12 max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/Sound-of-silence.png" alt="" />
                        <p className="mt-8">Дүрс, чимэглэлийг дуу, чимээгүйгээр төсөөлөхийн аргагүй. Тиймээс аниргүйгээс аялгууг төрүүлж, хүн бүрийн сонорыг
                  мялаадаг юм.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/Rectangle-42.jpg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row text-white font-light justify-between mt-12 max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/Rainbow-dash.png" alt="" />
                        <p className="mt-8">Энэ өрөөгөөр ороод гарсан нэвтрүүлэг бүр танигдахын аргагүй “өнгө” засаад л гарчихна.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/hr-5.jpg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row text-white font-light justify-between mt-12 max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/Meeting-room-1-2.png" alt="" />
                        <p className="mt-8">Ажил хэрэгч уулзалтууд эдгээр өрөөнд өрнөж, хамтран ажиллах олон ч гэрээ энд үзэглэгддэг дээ.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/Rectangle-44.jpg" alt="" />
                </div>
                <div className="flex flex-col md:flex-row text-white font-light justify-between mt-12 max-w-[960px] lg:max-w-[1200px] ">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src="https://centraltv.mn/wp-content/uploads/2022/06/Training-room.png" alt="" />
                        <p className="mt-8">Аль ч байгууллага ажилтнуудынхаа мэдлэг боловсрол, ур чадварыг дээшлүүлэх талаар хичээдэг байх. Манайх ч мөн хүн нэг
                  бүрийн хөгжлийг орхигдуулахгүй байх талаар онцгой анхаардаг юм.</p>
                    </div>
                    <img className="w-full md:w-1/2" src="https://centraltv.mn/wp-content/uploads/2022/06/Rectangle-45.jpg" alt="" />
                </div>
                <div class="w-full flex gap-[40%] justify-around px-28">
                      <button class="border-2 border-lime-600 p-2 px-6 text-xs font-semibold text-lime-600 hover:text-white hover:bg-lime-600 bg-transparent hover:text-white transition-all">
                          Холбоо барих
                      </button>
                      <button
                          class="border-2 border-lime-600 p-2 px-6 text-xs font-semibold text-lime-600 hover:text-white bg-transparent hover:bg-lime-600 hover:text-white transition-all">
                          Анкет бөглөх
                      </button>
                  </div>
            </div>
            {/* Footer */}
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