"use client";
import React from "react";
import style from "./index.module.css";

const index = ({ closeModal, deleteUser }) => {
  const handelerContinue = () => {
    deleteUser();

    closeModal(false);
  };
  return (
    <div className={style.modal_bg}>
      <div className={style.modal_container}>
        {/* <button className={style.modal_title_btn} onClick={() => closeModal(false)}>X</button> */}
        <div className={style.modal_title}>
          <h1>Are you want to continue?</h1>
        </div>

        <div className={style.modal_bottom}>
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button onClick={handelerContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default index;
