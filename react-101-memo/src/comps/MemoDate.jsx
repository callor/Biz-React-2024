import moment from "moment";
const MemoDate = ({ memo, setMemo }) => {
  const onClickNew = () => {
    const newMemo = {
      ...memo,
      m_date: moment().format("YYYY-MM-DD"),
      m_time: moment().format("HH:mm:ss"),
    };
    setMemo(newMemo);
  };

  const onChangeHander = (e) => {
    const { name, value } = e.target;
    setMemo({ ...memo, [name]: value });
  };

  return (
    <div className="memo_date">
      <input
        type="date"
        value={memo.m_date}
        name="m_date"
        onChange={onChangeHander}
      />
      <input
        type="time"
        value={memo.m_time}
        name="m_time"
        onChange={onChangeHander}
      />
      <input type="button" value="새로작성" onClick={onClickNew} />
    </div>
  );
};

export default MemoDate;
