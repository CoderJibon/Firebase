import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { FirebaseAPP } from "./FirebaseAPP.js";

/**
 *  get database
 */
const database = getFirestore(FirebaseAPP);

/**
 *  find on collection data
 */
export const find = async (colName) => {
  const data = await getDocs(collection(database, colName));

  const db = [];

  data.forEach((item) => {
    db.push({ ...item.data(), id: item.id });
  });

  return db;
};
export const findRT = (colName, setData) => {
  onSnapshot(
    query(collection(database, colName), orderBy("age", "desc")),
    (snapshot) => {
      const db = [];
      snapshot.docs.forEach((item) => {
        db.push({ ...item.data(), id: item.id });
      });
      setData(db);
    }
  );
};

/**
 *  find by id
 */
export const findById = async (colName, id) => {
  const data = await getDoc(doc(database, colName, id));
  return data.data();
};

/**
 *  create a new data
 */
export const create = async (colName, data, customId = null) => {
  console.log(data);
  if (customId) {
    await setDoc(doc(database, colName, customId), data);
  } else {
    await addDoc(collection(database, colName), data);
  }
};
/**
 *  delete a data by id
 */
export const deleteById = async (colName, id) => {
  const data = await deleteDoc(doc(database, colName, id));
  return "delete successfully";
};

/**
 *  update  a data by id
 */
export const updateById = async (colName, data, id) => {
  const db = await updateDoc(doc(database, colName, id), data);
  return db.data();
};
