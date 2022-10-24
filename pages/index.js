import React, { useState } from "react";
import Shop from "../components/Shop";

export default function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button
          className="border-none bg-[#0000ff] text-white text-[16px] rounded-[3px] py-[15px] px-[20px] min-w-[150px] cursor-pointer transition-opacity duration-200 ease-out shadow-[0_1px_1px_1px_rgba(0,0,0,0.2)] hover:opacity-80 disabled:opacity-40 active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px m-2.5"
          onClick={() => setLogin(false)}
        >
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Нужно залогиниться!</h2>
        <button
          className="border-none bg-[#0000ff] text-white text-[16px] rounded-[3px] py-[15px] px-[20px] min-w-[150px] cursor-pointer transition-opacity duration-200 ease-out shadow-[0_1px_1px_1px_rgba(0,0,0,0.2)] hover:opacity-80 disabled:opacity-40 active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px m-2.5"
          onClick={() => setLogin(true)}
        >
          Войти
        </button>
      </>
    );
  }
}
