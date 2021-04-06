import React, { useEffect} from "react";
import Check from "./Check.jsx";
import styles from "../styles/Checklist.module.css";
import Data from "../Data.json";
import Progressbar from "../components/Progressbar";
import { useContext } from "react";
import {checkedContext} from "../contexts/checkedContext"
import { totalContext } from "../contexts/totalContext.js";

const Checklist = () => {
  const {progressValue} = useContext(checkedContext)
  const {total, setTotal} = useContext(totalContext)
  useEffect(() => {
    const getTotal = Data.length
    setTotal(getTotal)
  }, [])
  return (
    <>
      <div className={styles.checklist_container}>
        {Data.map((check) => {
          return <Check title={check.title} image={check.img} key={check.key} />;
        })}
      </div>
      <div>
        <Progressbar value={progressValue} total={total} key={1} />
      </div>
    </>
  );
};
export default Checklist;
