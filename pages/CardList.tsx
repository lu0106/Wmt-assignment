import { useEffect, useState } from "react";
import Cards from "./Cards";
import PageBtn from "./Pagebtn";
import styles from "../styles/Home.module.css";

const CardList = () => {
  const [data, setData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [btnEnd, setBtnEnd] = useState(false);

  const getAPI = (pageNumber: number) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        // setData((prev: []) => {
        //   return [...prev, ...responseJson.results];
        // });
        getAPINextPage(currentPage + 1);
        setData(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAPINextPage = (pageNumber: number) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then(() => {
        setBtnEnd(false);
      })
      .catch((error) => {
        setBtnEnd(true);
        console.log(error);
      });
  };

  //   const handleScroll = () => {
  //     const isScrolledToBottom =
  //       window.innerHeight + document.documentElement.scrollTop >=
  //       document.documentElement.offsetHeight * 0.99;
  //     if (isScrolledToBottom) {
  //       setCurrentPage((prevPage) => prevPage + 1);
  //     }
  //   };

  useEffect(() => {
    getAPI(currentPage);
  }, [currentPage]);

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <>
      <div className={styles.cards}>
        {data.map((d: any, i: number) => {
          return (
            <div key={i}>
              <Cards dataName={d.name} dataImage={d.image} />
            </div>
          );
        })}
      </div>
      <div className={styles.btnGroup}>
        <PageBtn
          page={currentPage}
          setCurrentPage={setCurrentPage}
          btnEnd={btnEnd}
        />
      </div>
    </>
  );
};

export default CardList;
