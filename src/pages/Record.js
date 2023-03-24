import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Category from "../components/Category";
import AudioRecord from "../components/AudioRecord";

import { dbService, storageService } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "@firebase/storage";
import * as S from "../styles/Record/RecordStyle";

function Record() {
  const [hospital, setHospital] = useState("");
  const [categories, setCategories] = useState([]);
  const [soundFile, setSoundFile] = useState("");
  // const [stopstate, setStopState] = useState();

  const getCategories = (categories) => {
    setCategories(categories);
    // console.log(categories, "!!!");
  };

  const getSoundFile = (soundFile) => {
    setSoundFile(soundFile);
  };

  // const getStopState = (stopState) => {
  //   setStopState(stopState);
  // };

  console.log("파일 전달 확인!!", soundFile);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const soundFileRef = ref(storageService, `origianlRecordFile/${uuidv4()}`);
    const response = await uploadBytes(soundFileRef, soundFile);

    const fileUrl = await getDownloadURL(response.ref);

    try {
      const docRef = await addDoc(collection(dbService, "records"), {
        hospitalName: hospital,
        categories: categories,
        createdAt: Date.now(),
        fileUrl,
      });
      setHospital("");
      setCategories([]);
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding Document", error);
    }
  };

  const handleOnChange = ({ target: { value } }) => {
    setHospital(value);
  };

  return (
    <S.RecordWrap>
      <S.RecordFrom onSubmit={handleOnSubmit}>
        <S.RecordTitle> 진료 내용 기록하기 </S.RecordTitle>
        <S.RecordInput
          name="hospital"
          type="text"
          value={hospital}
          placeholder="병원 이름을 입력해 주세요."
          onChange={handleOnChange}
        />
        <Category getCategories={getCategories} />
        <AudioRecord getSoundFile={getSoundFile} />
        <S.BtnWarp>
          <S.AnalyzeBtn type="submit" value="" />
        </S.BtnWarp>
      </S.RecordFrom>
    </S.RecordWrap>
  );
}

export default Record;
