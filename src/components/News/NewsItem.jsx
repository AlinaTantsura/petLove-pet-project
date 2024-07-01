/* eslint-disable react/prop-types */
const NewsItem = ({ data }) => {
  return (
      <div>
          <div className="mb-5 md:mb-[28px] h-[190px] md:h-[226px] rounded-[15px] bg-slate-200 overflow-hidden">
              <img className="object-cover" src={data.imgUrl} alt={data.title} />
          </div>
          <h2 className="mb-3 md:mb-[14px] font-bold text-[16px] md:text-[20px] md:leading-[130%]">{data.title}</h2>
          <p className="mb-[19px] md:mb-[28px] text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] tracking-[-0.02em]">{data.text}</p>
          <div className="flex justify-between items-center text-[14px] md:text-[16px] leading-[129%] md:leading-[125%] tracking-[-0.02em]">
              <p className="text-opacity-black">15/03/2023</p>
              <a href={data.url} target="blank" className="text-orange-main underline">Read more</a>
          </div>
    </div>
  )
}

export default NewsItem