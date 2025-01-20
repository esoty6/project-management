export const saveToLocalStorage = (key: string, data: unknown) => {
  const objectAsString = JSON.stringify(data);

  try {
    localStorage.setItem(key, objectAsString);
  } catch (err: unknown) {
    console.error("An error occurred while trying to save data to local storage: ", err);
  }
};

export const getFromLocalStorage = <T>(key: string): T | null | undefined => {
  const dataFromLocalStorage = localStorage.getItem(key);

  if (!dataFromLocalStorage) {
    return null;
  }

  try {
    const typedData = JSON.parse(dataFromLocalStorage) as T;
    return typedData;
  } catch (err: unknown) {
    console.error(
      "An error occurred while trying to parse and/or type data from local storage: ",
      err
    );
  }
};
