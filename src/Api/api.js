const API = "http://172.30.1.9:8000/";
const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.BAwk01jYJjCSMdifZqmwPWbLi65xV4usBNGiZ8jScPE";

const getData = async () => {
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
  console.log(API + path);
  try {
    const res = await fetch(API + path, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
        // Authorization : getData(),
      },
    });
    const result = await res.json();
    console.log(result);
    return result;
  } catch (e) {
    console.log("페치에 실패");
  }
};

export const post = async (path, data) => {
  try {
    const res = await fetch(API + path, {
      method: "POST",
      body: JSON.stringify({
        data,
      }),
    });

    const result = await res.json();
    return result;
  } catch (e) {
    console.log("패치에 실패");
  }
};

export const deleteItem = async (path, data) => {
  try {
    const res = await fetch(API + path, {
      method: "DELETE",
      headers: {
        Authorization: TOKEN,
        // Authorization : getData(),
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
    const res = await fetch(API + path, {
      method: "PUT",
      headers: {
        Authorization: TOKEN,
        // Authorization : getData(),
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    return result;
  } catch (e) {
    console.log(e.message);
  }
};
