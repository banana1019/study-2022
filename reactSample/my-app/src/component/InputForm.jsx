import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const InputForm = () => {
  // 주석
  // 의문스러운 거.. 워닝 안 잡은 이유.. 워닝 잡기..
  // indent 맞추기...
  // 가독성... 우로 너무 길다...
  const [read, setRead] = useState([]);

  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [etc, setEtc] = useState([]);
  const [address, setAddress] = useState([]);
  const [gender, setGender] = useState([]);
  const [email, setEmail] = useState([]);
  const [tel, setTel] = useState([]);

  const fetchDatas = async () => {
    const response = await axios.get("http://localhost:4000/getData");
    setRead(response.data);
  };

  const dataInsert = () => {
    console.log(name);
    console.log(age);
    console.log(etc);
    axios.post("http://localhost:4000/postData", {
      data: { data: [name, age, etc, address, gender, email, tel] },
    });
    console.log(name);
    fetchDatas();
  };

  const dataDelete = (value) => {
    console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
    console.log(value[3]);
    console.log(value[4]);
    console.log(value[5]);
    console.log(value[6]);
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "etc") {
      setEtc(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setTel(value);
    }
  };

  const onReset = () => {
    setName("");
    setAge("");
    setEtc("");
    setAddress("");
    setGender("");
    setEmail("");
    setTel("");
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <>
      이름:
      <input
        className="name-input"
        type="text"
        placeholder="이름"
        value={name}
        onChange={getValue}
        name="name"
      ></input>
      <br />
      나이:
      <input
        className="age-input"
        type="text"
        placeholder="나이"
        value={age}
        onChange={getValue}
        name="age"
      ></input>
      <br />
      추가사항:
      <input
        className="etc-input"
        type="text"
        placeholder="추가사항"
        value={etc}
        onChange={getValue}
        name="etc"
      ></input>
      <br />
      주소:
      <input
        className="address-input"
        type="text"
        placeholder="주소"
        value={address}
        onChange={getValue}
        name="address"
      ></input>
      <br />
      성별:
      <input
        className="gender-input"
        type="text"
        placeholder="성별"
        value={gender}
        onChange={getValue}
        name="gender"
      ></input>
      <br />
      이메일:
      <input
        className="email-input"
        type="text"
        placeholder="이메일"
        value={email}
        onChange={getValue}
        name="email"
      ></input>
      <br />
      전화번호:
      <input
        className="tel-input"
        type="text"
        placeholder="전화번호"
        value={tel}
        onChange={getValue}
        name="tel"
      ></input>
      <br />
      <Link to="/inputform">
        <button
          onClick={() => {
            dataInsert();
            onReset();
          }}
        >
          제출하기
        </button>
      </Link>
      <br></br>
      <br />
      <div>입력목록보기</div>
      <table className="tablelist">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>etc</th>
            <th>address</th>
            <th>gender</th>
            <th>email</th>
            <th>tel</th>
          </tr>
        </thead>
        <tbody>
          {read.map((v, i) => (
            <tr>
              <td key={v.name}>{v.name}</td>
              <td key={v.age}>{v.age}</td>
              <td key={v.test_data}>{v.test_data}</td>
              <td key={v.address}>{v.address}</td>
              <td key={v.gender}>{v.gender}</td>
              <td key={v.email}>{v.email}</td>
              <td key={v.tel}>{v.tel}</td>
              <td>
                <button
                  value={v.name}
                  onClick={() => {
                    dataDelete([v.name, v.age, v.test_data]);
                  }}
                >
                  삭제
                </button>
              </td>
              <td>
                <button>수정</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default InputForm;
