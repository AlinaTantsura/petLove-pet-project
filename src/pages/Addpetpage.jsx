import AddPetForm from "../components/AddPet/AddPetForm";
import PetBlock from "../components/PetBlock";
import addPetPictures from "../assets/images/addPetPictures";

const Addpetpage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-[10px] md:gap-4 xl:gap-8">
      <PetBlock>
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet={`${addPetPictures.addPetDogDesktop2x} 2x, ${addPetPictures.addPetDogDesktop} 1x`}
            sizes="1280px"
          />
          <source
            media="(min-width:768px)"
            srcSet={`${addPetPictures.addPetDogTablet2x} 2x, ${addPetPictures.addPetDogTablet} 1x`}
            sizes="768px"
          />
          <source
            media="(min-width:320px)"
            srcSet={`${addPetPictures.addPetDogMobile2x} 2x, ${addPetPictures.addPetDogMobile} 1x`}
            sizes="320px"
          />
          <img
            src={addPetPictures.addPetDogMobile}
            alt="The dog with glasses"
          />
        </picture>
      </PetBlock>
      <AddPetForm />
    </div>
  );
};

export default Addpetpage;
