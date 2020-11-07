import AsyncStorage from "@react-native-async-storage/async-storage";

const API = "http://localhost:8000/";

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("ACCESS_TOKEN");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export const get = async (path, data) => {
  const token = await getData();

  try {
    const res = await fetch(API + path, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const result = await res.json();

    return result;
  } catch (e) {
    console.log("페치에 실패");
  }
};

export const post = async (path, data) => {
  try {
    const res = await fetch(API + path, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (e) {
    console.log("패치에 실패");
  }
};

export const deleteItem = async (path, data) => {
  try {
    const token = await getData();
    const res = await fetch(API + path, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    return result;
  } catch (e) {
    console.log(e.message);
  }
};

export const put = async (path, data) => {
  try {
    const token = await getData();
    const res = await fetch(API + path, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    return result;
  } catch (e) {
    console.log(e.message);
  }
};
