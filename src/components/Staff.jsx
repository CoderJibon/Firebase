import { useEffect, useState } from "react";
import { create, deleteById, findRT } from "../Firebase/models.js";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { serverTimestamp } from "firebase/firestore";
import { storage } from "../Firebase/FirebaseAPP.js";

function Staff() {
  const [getData, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({
    name: "",
    age: "",
    location: "",
    department: "",
  });

  const changeInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const getAllData = async () => {
    await findRT("staff", setData);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleFormSubmit = async () => {
    const fileData = await uploadBytesResumable(ref(storage, file?.name), file);
    const photo = await getDownloadURL(fileData.ref);

    await create("staff", {
      ...input,
      status: true,
      trash: false,
      createAt: serverTimestamp(),
      updateAt: serverTimestamp(),
      photo: photo,
    });
    setInput({
      name: "",
      age: "",
      location: "",
      department: "",
    });
  };

  const handleItemDelete = async (id) => {
    if (id) {
      await deleteById("staff", id);
    }
  };
  return (
    <>
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={changeInput}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={input.age}
          onChange={changeInput}
          placeholder="Age"
        />
        <input
          type="text"
          name="location"
          value={input.location}
          onChange={changeInput}
          placeholder="Location"
        />
        <input
          type="text"
          name="department"
          value={input.department}
          onChange={changeInput}
          placeholder="Department"
        />
        <input
          type="file"
          name="photo"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleFormSubmit}>Create</button>
      </div>
      ----------------------------------------------------------------------------------------------------------------------------------------------
      ---------------------------------------------------------------------------------------------------------------
      <br />
      <div>
        <ul>
          {getData.length > 0
            ? getData?.map((item, i) => (
                <li key={i}>
                  <div>
                    <div>
                      Name : {item.name} Age : {item.age}, location :{" "}
                      {item.location}
                      department : {item.department}
                      {item.photo && (
                        <img
                          style={{ width: "200px" }}
                          src={item.photo}
                          alt=""
                        />
                      )}
                      {"--"}{" "}
                      <button onClick={() => handleItemDelete(item.id)}>
                        x
                      </button>
                    </div>
                  </div>
                </li>
              ))
            : "Loading..."}
        </ul>
      </div>
    </>
  );
}

export default Staff;
