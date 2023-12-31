"use client";
import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/index";
import Modal from "../Modal/modal";
import style from "./index.module.css";

const Search = () => {
  const [arr, setArr] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    country: "",
  });

  useEffect(() => {
    const storageData = localStorage.getItem("Data");
    if (storageData) {
      setArr(JSON.parse(storageData));
    }
  }, []);

  const change = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  let { name, lastName, email, age, country } = search;
  const changeHandler = (e) => {
    e.preventDefault();
    setArr([...arr, { name, lastName, email, age, country }]);
    setSearch([{ name: "", lastName: "", email: "", age: "", country: "" }]);
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(arr));
    console.log(arr, "----ARR-");
  }, [arr]);

  return (
    <div>
      <form className={style.form}>
        <input
          className={style.search_input}
          name="name"
          type="text"
          placeholder="Enter name"
          onChange={change}
          value={search.name || ""}
        />
        <input
          className={style.search_input}
          name="lastName"
          type="text"
          placeholder="Enter LastName"
          onChange={change}
          value={search.lastName || ""}
        />
        <input
          className={style.search_input}
          name="email"
          type="text"
          placeholder="Enter email"
          onChange={change}
          value={search.email || ""}
        />
        <input
          className={style.search_input}
          type="number"
          name="age"
          placeholder="Enter Age"
          onChange={change}
          value={search.age || ""}
        />
        <input
          className={style.search_input}
          type="text"
          name="country"
          placeholder="Enter yout country"
          onChange={change}
          value={search.country || ""}
        />
        <button className={style.btn} onClick={changeHandler}>
          Add
        </button>
      </form>
      <ListItem listProps={arr} />
    </div>
  );
};

export default Search;
