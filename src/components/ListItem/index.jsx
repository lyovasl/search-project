"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/modal";
import style from "./index.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ListItem = ({ listProps }) => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const [list, setList] = useState([]);

  useEffect(() => {
    if (listProps) {
      setList(listProps);
      localStorage.setItem("listProps", JSON.stringify(list));
    }
  }, [listProps]);

  const removeList = (index) => {
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  };

  return (
    <>
      <ul>
        {list.map((val, i) => (
          <div className={style.list} key={i}>
            <li>{val.name}</li>
            <li>{val.lastName}</li>
            <li>{val.email}</li>
            <li>{val.age}</li>
            <li>{val.country}</li>
            {/* <button className={style.list_btn} onClick={() => removeList(i)}>
                X
              </button> */}
            {/* <UserProfile list={val} /> */}

            <Link className={style.list_btn} href={`/${i}`}>
              Next
            </Link>
            <button
              className={style.list_btn}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Remove
            </button>
            {openModal && (
              <Modal
                deleteUser={() => removeList(i)}
                closeModal={setOpenModal}
              />
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default ListItem;

// "use client";
// import React, { useEffect, useState } from "react";
// import Modal from "../Modal/modal";
// import UserProfile from "../UserProfile/index";
// import style from "./index.module.css";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const ListItem = ({ listProps }) => {
//   const [openModal, setOpenModal] = useState(false);
//   const router = useRouter();
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     const storedListProps = JSON.parse(localStorage.getItem("listProps")) || [];

//     // Проверяем, есть ли данные в localStorage, если нет - используем listProps
//     if (storedListProps.length > 0) {
//       setList(storedListProps);
//     } else if (listProps) {
//       setList((prevList) => [...prevList, listProps]);
//       localStorage.setItem("listProps", JSON.stringify(list));
//     }
//   }, [listProps]);

//   const removeList = (index) => {
//     const updatedList = list.filter((item, i) => i !== index);
//     setList(updatedList);
//   };

//   // Обновляем localStorage и интерфейс при каждом изменении list
//   useEffect(() => {
//     localStorage.setItem("listProps", JSON.stringify(list));
//   }, [list]);

//   return (
//     <>
//       {list.length === 0 ? (
//         <p>No items to display</p>
//       ) : (
//         <ul>
//           {list.map((val, i) => (
//             <div className={style.list} key={i}>
//               <li>{val.name}</li>
//               <li>{val.lastName}</li>
//               <li>{val.email}</li>
//               <li>{val.age}</li>
//               <li>{val.country}</li>

//               <Link className={style.list_btn} href={`/${i}`}>
//                 Next
//               </Link>
//               <button
//                 className={style.list_btn}
//                 onClick={() => {
//                   setOpenModal(true);
//                 }}
//               >
//                 Remove
//               </button>
//               {openModal && (
//                 <Modal
//                   deleteUser={() => removeList(i)}
//                   closeModal={() => setOpenModal(false)}
//                 />
//               )}
//             </div>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default ListItem;
