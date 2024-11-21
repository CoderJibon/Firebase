import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./FirebaseAPP.js";

export const uploadFile = async (name, file) => {
  const fileURL = await uploadBytesResumable(ref(storage, name), file);
  const uploadURL = await getDownloadURL(fileURL.ref);
  return uploadURL;
};
