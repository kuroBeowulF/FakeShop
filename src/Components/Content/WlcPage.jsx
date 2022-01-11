import { useEffect } from "react";
import DoFetch from "../../Redux/Actions/DoFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Skeleton } from "antd";
import { useSelector, useDispatch } from "react-redux";
const WlcPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.Fetch);
  useEffect(() => {
    dispatch(DoFetch.doFetch(""));
  }, []);

  SwiperCore.use([Autoplay]);
  if (loading || data.length === 0)
    return <Skeleton className="min-h-screen" />;
  if (error) return <div className="min-h-screen">{error}</div>;
  if (data.length) {
    return (
      <div className="wlcPage min-h-screen">
        <div className="bgHeight w-full flex justify-center items-center">
          <div className="bg1 h-5/6 lg:w-3/6 w-5/6"></div>
          <div className="bg2 h-2/3 w-2/4 lg:block hidden"></div>

          <div className="hidden lg:block h-5/6 w-2/6 ml-10">
            <div className="flex w-full h-1/2">
              <div className="bg3 h-full w-1/4 mr-10"></div>
              <div className="bg4 h-full w-1/2"></div>
            </div>
            <div className="flex w-full h-1/2">
              <div className="bg5 h-full w-1/4 mr-10"></div>
              <div className="bg6 h-full w-1/2"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center mt-5">
          <div className=" h-28 w-1/4 bg-gradient-to-r from-slate-300 to-slate-700 rounded-lg  pr-5 flex items-center justify-end text-white lg:text-xl text-base">
            About Us
          </div>
          <div className="fontZz ml-5 xl:text-lg lg:text-md text-xs h-28 w-3/4 text-slate-900 px-2">
            In today’s world, running a business is no piece of cake. There is
            massive competition knocking at your doorstep, with different
            companies trying their best to be the king on the hill. This
            competition in the market is one of the major reasons that
            businesses suffer thus making it difficult to get the message of
            your products or services out to your potential
            customers.Nevertheless, today with modern technology like text
            advertisements, you can now easily increase your customer
            penetration and stay ahead of your competitors.How do you do it you
            say? Well, just think “text ads in Google ads” and you can enhance
            your sales and be assured of a profitable business.
          </div>
        </div>
        <div className="w-full flex mt-5">
          <div className="mt-5 h-28 xl:w-2/4 w-2/5 bg-gradient-to-r from-slate-300 to-slate-700 rounded-lg pr-5 md:flex items-center justify-end text-white lg:text-xl text-base hidden">
            Features
          </div>
          <div className="ml-5 xl:text-lg lg:text-sm h-28 xl:w-2/4 w-3/5 text-red-900 px-2 mt-5 md:block hidden">
            <div className="h-12 w-full flex justify-around">
              <div className="featuresBox w-60 flex justify-center items-center bg-slate-600 text-green-300">
                online Delivery
              </div>
              <div className="featuresBox w-40 bg-slate-600 flex justify-center items-center text-green-300">
                Easy pay
              </div>
              <div className="featuresBox w-60 bg-slate-600 flex justify-center items-center text-green-300">
                Big Seasons Sale
              </div>
              <div className="featuresBox w-40 bg-slate-600 flex justify-center items-center text-green-300">
                Birthday Gift
              </div>
            </div>
            <div className="h-12 w-full flex justify-around mt-2">
              <div className="featuresBox w-60 bg-slate-600 flex justify-center items-center text-green-300">
                High Quality Products
              </div>
              <div className="featuresBox w-40 bg-slate-600 flex justify-center items-center items-center text-green-300">
                Kind Stafs
              </div>
              <div className="featuresBox w-40 bg-slate-600 flex justify-center items-center items-center text-green-300">
                Installment
              </div>
              <div className="featuresBox w-60 bg-slate-600 flex justify-center items-center text-green-300">
                Back Product after sale
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center md:mt-5 mt-20">
          <div className="mt-5 h-28 xl:w-3/4 w-2/4 bg-gradient-to-r from-slate-300  to-slate-700 rounded-lg pr-5 flex items-center justify-end text-white lg:text-xl text-base">
            Receive Hot Discount
          </div>

          <div className="ml-5 text-lg h-28 xl:w-1/4 w-2/4 text-red-900 px-2">
            <div className="h-12 w-full flex justify-around mt-2">
              <div className="discountBox bg-slate-600 text-green-300">5%</div>
              <div className="discountBox bg-slate-600 text-green-300">10%</div>
              <div className="discountBox bg-slate-600 text-green-300">20%</div>
              <div className="discountBox bg-slate-600 text-green-300">30%</div>
            </div>
            <div className="h-12 w-full flex justify-around mt-2">
              <div className="discountBox bg-slate-600 text-green-300">30%</div>
              <div className="discountBox bg-slate-600 text-green-300">40%</div>
              <div className="discountBox bg-slate-600 text-green-300">50%</div>
              <div className="discountBox bg-slate-600 text-green-300">70%</div>
            </div>
          </div>
        </div>
        <div className="swiperBox">
          <Swiper
            slidesPerView={"10"}
            spaceBetween={30}
            allowTouchMove={true}
            breakpoints={{
              320: {
                width: 768,
                slidesPerView: 3,
              },
              400: {
                width: 768,
                slidesPerView: 4,
              },
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 5,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 7,
              },
            }}
            autoplay={
              (true,
              {
                delay: 2000,
              })
            }
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="zzz!!" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-5 h-28 w-4/4 bg-gradient-to-r from-slate-700  to-slate-300 rounded-lg pr-5 flex items-center justify-end text-white text-xl mb-12"></div>
      </div>
    );
  }
};
export default WlcPage;
