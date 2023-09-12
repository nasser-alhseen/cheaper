import requestOptions from "../../../../constants/requestOptions";

export default async function getUserBlocks(userInformation, id, setBlocks, blocks, toast) {
  try {
    let response = await fetch(`${import.meta.env.VITE_URL}/admin/users/allBlockUser/${id}`, { ...requestOptions, method: "get", headers: { ...requestOptions.headers, authorization: userInformation.token } });
    let data = await response.json();
    if (data.success) {
      console.log(data);
      setBlocks({ ...data.data });
    } else {
      console.log(data.error);
      toast.error("عذرا, حدث خطأ في السيرفر", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
