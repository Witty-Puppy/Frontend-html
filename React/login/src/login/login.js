import React from 'react'
import '../login/login.css';
// import { useNavigate } from 'react-router-dom';

function Login(){

    // const navigate = useNavigate();
    // const goUrl = () => {
    //     navigate('/list');
    // };

    return (

        // <div className="gray-body">
        //     <div className="wrap-login">
        //         <section className="login-section">
        //             <h2 className="hidden">로그인 폼</h2>
        //             <h1 className="webucks-logo big-logo">webucks</h1>
        //             {/*form start*/}
        //             <form className="login-form">
        //                 <div className="input-box">
        //                     <input id="inputId" type="text" className="input-default" placeholder="전화번호, 사용자 이름 또는 이메일" />
        //                 </div>
        //                 <div className="input-box">
        //                     <input id="inputPw" type="password" className="input-default" placeholder="비밀번호" />
        //                 </div>
        //                 <button type='button' id="loginBtn" className="btn primary" disabled>로그인</button>
        //
        //                 <div className="form-end">
        //                     <a className="inline-link" href="$">비밀번호를 잊으셨나요?</a>
        //                 </div>
        //             </form>
        //             {/*form end*/}
        //         </section>
        //     </div>
        // </div>




        <div className="main">

            <div className="login_box">
                <h1>Witty Wave</h1>
                <h3>Login</h3>
                <input type="text" placeholder="아이디를 입력하세요"/>
                <input type="text" placeholder="비밀번호를 입력하세요"/>
                        <button>로그인</button>
                        <button>비밀번호 찾기</button>
            </div>
        </div>
);
}

export default Login;