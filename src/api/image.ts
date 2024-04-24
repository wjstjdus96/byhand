import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const uploadProductImage = async (file: File, name: string) => {
  const storageRef = ref(storage, name);
  return await uploadBytes(storageRef, file);
};

export const getImageUrl = async (productImage: (string | File)[]) => {
  const imageArray: string[] = [];

  for (const image of productImage) {
    if (typeof image != "string") {
      const snapshot = await uploadProductImage(image, image.name);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      imageArray.push(downloadUrl);
    } else {
      imageArray.push(image);
    }
  }

  return imageArray;
};
