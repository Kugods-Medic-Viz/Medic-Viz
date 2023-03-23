import Category from "../components/Category";
import AudioRecord from "../components/AudioRecord";


function Record() {
  return (
    <>
      <h1> 진료 내용 기록하기 </h1>
      <input
        name="hospital"
        type="text"
        placeholder="병원 이름을 입력해 주세요."
      />
      <Category />
      <AudioRecord />
    </>
  );
}
export default Record;
