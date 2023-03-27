// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();


// Firebase Storage에서 Blob 녹음 파일의 URI를 가져옵니다.
const storageRef = firebase.storage().ref();
const audioRef = storageRef.child('audio/recorded_audio.wav');
audioRef.getDownloadURL().then(function(url) {

// Google Cloud Storage의 gc_util URI 넣는 경우 : local 다운로드/업로드 필요 없음
const gcsUri = 'gs://my-bucket/audio.raw';

// const encoding = 'Encoding of the audio file, e.g. LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'ko-KR';

const config = {
  // encoding: encoding,
  sampleRateHertz: sampleRateHertz,
  languageCode: languageCode,
};
const audio = {
  uri: gcsUri,
};

const request = {
  config: config,
  audio: audio,
};

// Detects speech in the audio file
const [response] = await client.recognize(request);
const transcription = response.results
  .map(result => result.alternatives[0].transcript)
  .join('\n');
console.log('Transcription: ', transcription);