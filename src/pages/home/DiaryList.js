import { useFirestore } from '../../hooks/useFirestore';
import styles from './Home.module.css'


export default function DiaryList({ diaries}){
    const { deleteDocument } = useFirestore('diary');

    return (
        <>
            {
                diaries.map((item)=> {
                    return(
                        <li key={item.id}>
                            <table
            border="1"
            bordercolor="black"
            width="80%"
            height="200"
            cellspacing="5">
            <thead>
                <tr align="center" bgcolor="white">
                    <td><strong><label htmlFor='tit'>루틴 이름 </label></strong></td>
                    <th><p className={styles.title}>{item.title}</p></th>
                </tr>
            </thead>

            <tbody>
                {/* <tr align="center" bgcolor="white">
                <td><label htmlFor='tit'>타입: </label></td>
                <td><p className={styles.text}>{item.type}</p></td>
                </tr> */}
                <tr align="center" bgcolor="white">
                <td><label htmlFor='tit'>요일 </label></td>
                <td><p className={styles.text}>{item.date}</p></td>
                </tr>
                <tr align="center" bgcolor="white">
                <td><label htmlFor='tit'>시간  </label></td>
                <td><p className={styles.text}>{item.time}</p></td>
                </tr>
                <tr align="center" bgcolor="white">
                <td><label htmlFor='tit'>난이도  </label></td>
                <td><p className={styles.text}>{item.difficulty}</p></td>
                </tr>
                <tr align="center" bgcolor="white">
                <td><label htmlFor='tit'>루틴 내용  </label></td>
                <td><p className={styles.text}>{item.text}</p></td>
                </tr>
            </tbody>
        </table>
                            <button type="button" onClick={()=>{deleteDocument
                            (item.id)}}>삭제</button>
                        </li>
                    )
                })
            }
            
        </>
    //     <div>
    //   <h1>Operating Systems</h1>
    //   <ul>
    //     {docs?.map((doc) => (
    //       <div key={Math.random()}>
    //         <li>{doc.name}</li>

    //         <ChildrenList path={`diary/${doc.name}/children`} />
    //       </div>
    //     ))}
    //     <AddNew path="diary" />
    //   </ul>
    // </div>
    )
}