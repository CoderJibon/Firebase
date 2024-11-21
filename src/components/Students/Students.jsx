import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { FirebaseAPP } from "../../Firebase/FirebaseAPP.js";

function Students() {
  const database = getFirestore(FirebaseAPP);
  const getFirebaseData = async () => {
    //const data = await getDocs(collection(database, "students"));
    // const data = await getDoc(
    //   doc(database, "students", "BighfJXTJvvNSRixExlI")
    // );
    // console.log(data.data());
    // const data = await addDoc(collection(database, "students"), {
    //   name: "howlader student",
    //   age: 35,
    //   skill: "fulto Developer",
    // });

    // const deleted = await deleteDoc(
    //   doc(database, "students", "r0KmI8bDZHsXFrxtkS9b")
    // );
    const updated = await updateDoc(
      doc(database, "students", "vqRxjRayLoM3dr1hao0g"),
      {
        name: "sajib dev",
        skill: "fulto Developer",
      }
    );
  };

  getFirebaseData();
  return <div></div>;
}

export default Students;
