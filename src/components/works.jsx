import React from "react";
import TituloSeccion from "./tituloSeccion";
import ComboLG from "./comboLG";
import ComboMD from "./comboMD";
import ComboL from "./comboL";
import ComboS from "./comboS";
import "../css/works.css";

const Works = () => {
  return (
    <div className="works_content px-3 py-0 md:mt-[16px]">
      <div className="works-back mx-auto w-full max-w-[1440px]">
        <TituloSeccion titulo="Works" />

        <div className="seccion-subTitulo mt-[24px] flex flex-col gap-[16px]">
          <span className="text-md-lato-700 grey-black mx-[16px] text-left">
            Unites aesthetic innovation with technical prowess.
          </span>

          <span className="text-md-lato-400 grey-black mx-[16px] text-left">
            From strategic planning that charts your digital destiny to
            Intuitive UX Design paired with advanced Coding Techniques, we
            architect and implement ideas into impactful digital realities.
          </span>
        </div>

        <div className="combo_fila1 mt-[16px] grid grid-cols-1">
          <ComboLG />
        </div>

        <div className="combo_fila2">
          <ComboL />
          <ComboS />
        </div>

        <div className="combo_fila3">
          <ComboMD />
          <ComboMD />
        </div>
      </div>
    </div>
  );
};

export default Works;
