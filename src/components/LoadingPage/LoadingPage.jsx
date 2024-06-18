import loadingImage from '../../assets/images/loadingBackImg@1x-min.png'
import loadingImage2x from '../../assets/images/loadingBackImg@2x-min.png'
import loadingImageTablet from '../../assets/images/tablet-loadingBackImg@1x-min.png'
import loadingImageTablet2x from '../../assets/images/tablet-loadingBackImg@2x-min.png'
import loadingImageMobile from '../../assets/images/mobile-loadingBackImg@1x-min.png'
import loadingImageMobile2x from '../../assets/images/mobile-loadingBackImg@2x-min.png'

export const LoadingPage = () => {
    return (
        <div className='relative min-w-[320px] max-w-[375px] md:min-w-[375px] md:max-w-[768px] xl:min-w-[768px] xl:max-w-[1280px] h-[812px] md:h-[1024px] xl:h-[800px] m-auto'>
            <picture>
             <source media="(min-width:1280px)" srcSet={`${loadingImage2x} 2x, ${loadingImage} 1x`} sizes="1280px"/>
                 <source media="(min-width:768px)" srcSet={`${loadingImageTablet2x} 2x, ${loadingImageTablet} 1x`} sizes="768px"/>
                <source media="(min-width:320px)" srcSet={`${loadingImageMobile2x} 2x, ${loadingImageMobile} 1x`} sizes="320px"/>
                <img src={loadingImageMobile} alt="The doctor examines the dog's ear" />
            </picture>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full border-[2px] border-white border-opacity-30 w-[398px] h-[398px]'>
                <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-[50px]  md:text-[100px] text-white leading-[100%] tracking-[-0.04em]'>petlove</div>
            </div>
                 </div>
      
    )
}