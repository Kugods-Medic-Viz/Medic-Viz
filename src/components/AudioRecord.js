import React from "react";
import { ReactMic } from "react-mic";

export default class AudioRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
    };
  }

  startRecording = () => {
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };

  //   onData(recordedBlob) {
  //     console.log("chunk of real-time data is: ", recordedBlob);
  //   }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
    const audioURL = recordedBlob.blobURL;
    console.log(audioURL);

    const soundFile = new File([audioURL], "audioRecordBlobFile", {
      lastModified: new Date().getTime(),
      type: "mp4",
    });
    console.log(soundFile);
  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          mimeType="audio/mp3"
          onStop={this.onStop}
        />
        <button onClick={this.startRecording} type="button">
          Start
        </button>
        <button onClick={this.stopRecording} type="button">
          Stop
        </button>
      </div>
    );
  }
}
