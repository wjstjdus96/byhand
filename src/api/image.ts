import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const uploadProductImage = async (file: File, name: string) => {
  const storageRef = ref(storage, name);
  return await uploadBytes(storageRef, file);
};
