import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore";

export default function DiaryForm({ uid }){
    
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [difficulty, setText2] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("")
    const [type, setType] = useState("")
    const {addDocument, response } = useFirestore('diary');

    const handleData = (event) => {
        if(event.target.id === "txt") {
            setText(event.target.value);
        }if(event.target.id === "difficulty") {
            setText2(event.target.value);
        }if(event.target.id === "date") {
            setDate(event.target.value);
        }if(event.target.id === "type") {
            setType(event.target.value);
        }if(event.target.id === "time") {
            setTime(event.target.value);    
        }else if(event.target.id === 'tit'){
            setTitle(event.target.value);
        }
    }
    
    useEffect(() => {
        console.log(response);
        if(response.success)
        setText('');
        setText2('');
        setDate('');
        // setText4('');
        setType('');
        setTime('');
        setTitle('');
    }, [response.success]
    )


    function handleSubmit(event) {
        event.preventDefault();
        console.log(title, text, difficulty, time, date, type);
        addDocument({ uid, title, text, difficulty, date, time, type });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>루틴 추가</legend>
                {/* <label><span>건강</span>
                <input id='type' type="radio" name="type" value="건강" />
                </label>
                <label><span>성장</span>
                <input id='type'  type="radio" name="type" value="성장" />
                </label>
                <label><span>생활</span>
                <input id='type'  type="radio" name="type" value="생활" />
                </label> */}
                    <label htmlFor='tit'>루틴 이름 : </label>
                    <input id='tit' type='text' value={title} required onChange={handleData} />
                    <label htmlFor='tit'> 요일(YYYY-MM-DD) : </label>
                    <input id='date' type='date' value={date} required onChange={handleData} />
                    {/* <label htmlFor='tit'> 난이도 : </label>
                    <input id='txt4' type='number' value={text4} required onChange={handleData}  /> */}
                    <label htmlFor='tit'> 시간(00:00) : </label>
                    <input id='time' type='time' value={time} required onChange={handleData}  />
                    <label htmlFor='tit'> 난이도(숫자) : </label>
                    <input id='difficulty' type='number' value={difficulty} required onChange={handleData} />
                    <label htmlFor='txt'>루틴 내용 : </label>
                    <textarea id='txt' type='text' value={text} required onChange={handleData}></textarea>
                    <button type='submit'>저장하기</button>
                </fieldset>
            </form>        
        </>
    )
}