import { Header, Banner, Works, Servicios, Bureau } from "../components";
import Contacto from "../components/contacto";

export const Home = () => {
  return (
    <>
      <div className="fixed left-1/2 z-50  w-full -translate-x-1/2 transform bg-white50 backdrop-blur-sm md:top-0 md:flex md:h-auto md:w-[98%] md:rounded-[555px] md:px-[16px] lg:mt-[8px]">
        <Header />
      </div>

      <Banner />

      <div
        className="flex w-full flex-col z-50"
      >
        <Works />

        <Servicios />

        <Bureau />

        <Contacto />
      </div>
    </>
  );
};

