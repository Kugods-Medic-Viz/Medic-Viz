import { useState } from "react";
import { ReactMic } from "react-mic";

function AudioRecord(props) {
  const [recordState, setRecordState] = useState(false);

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
  };

  return (
    <div>
      <ReactMic record={recordState} mimeType="audio/mp3" onStop={onStop} />
      <button onClick={startRecording} type="button">
        Start
      </button>
      <button onClick={stopRecording} type="button">
        Stop
      </button>
    </div>
  );
}
export default AudioRecord;
