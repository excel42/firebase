import styles from './Login.module.css'
import { useLogin } from '../../hooks/useLogin';
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password);
    }

    return (

        <form className={styles.login_form} onSubmit={handleSubmit} >
            <fieldset>
                <legend>로그인</legend>

                <label htmlFor="myEmail">email : </label>
                <input type="email" id="myEmail" required onChange={handleData} value={email} />

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id="myPassWord" required onChange={handleData} value={password} />

                {!isPending && <button type="submit" className="btn">로그인</button>}
                {/* 로그인이 진행 중이라면 로그인 버튼을 제거하고 정보를 표시합니다. */}
                {isPending && <strong>로그인이 진행중입니다...</strong>}
                {error && <strong>{error}</strong>}
                
            </fieldset>
        </form>

    )
}