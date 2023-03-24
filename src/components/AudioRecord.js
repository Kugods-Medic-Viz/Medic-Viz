import { useState } from "react";
import { ReactMic } from "react-mic";
import * as S from "../styles/Record/AudioRecordStyle";

function AudioRecord(props) {
  const [recordState, setRecordState] = useState(false);
  // const [isStopped, setIsStopped] = useState(false);

  const startRecording = () => {
    setRecordState(true);
    console.log(recordState);
  };

  const stopRecording = () => {
    setRecordState(false);
    console.log(recordState);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    const audioURL = recordedBlob.blobURL;
    console.log(audioURL);

    const soundFile = new File([audioURL], "audioRecordBlobFile", {
      lastModified: new Date().getTime(),
      type: "mp4",
    });
    console.log(soundFile);
    props.getSoundFile(soundFile);
    // props.getStopState(isStopped);
  };

  return (
    <div>
      <ReactMic
        record={recordState}
        mimeType="audio/mp3"
        onStop={onStop}
        visualSetting="none"
      />
      <S.btnWrap>
        {recordState === false ? (
          <S.startBtn onClick={startRecording} type="button"></S.startBtn>
        ) : (
          <S.stopBtn onClick={stopRecording} type="button"></S.stopBtn>
        )}
      </S.btnWrap>
    </div>
  );
}
export default AudioRecord;
