/* eslint-disable react/prop-types */
const Title = ({children}) => {
  return (
      // <h1 className="mb-3 md:mb-4 font-bold text-[28px] md:text-[54px] leading-[100%] tracking-[-0.04em]">{children}</h1>
      <h1 className="font-bold text-[28px] md:text-[54px] leading-[100%] tracking-[-0.04em]">{children}</h1>
  )
}

export default Title