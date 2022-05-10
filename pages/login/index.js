import MainNavBar from "../../components/MainNavBar";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
        <MainNavBar />
        <main className={styles.mainWrapper}>
            <form className={styles.formWrapper}>
                <div className={styles.formContents}>
                    <h1 className={styles.header} > Sign in </h1>
                    <input type="text" name="email" value="" placeholder="Email address" className={styles.emailInput} />
                    <input type="text" name="password" value="" placeholder="Password" className={styles.passwordInput} />

                    <div className={styles.btnWrapper}>
                        <button className={styles.signinBtn}> Sign in </button>
                    </div>
                </div>
            </form>
        </main>
    </div>
  )
}

export default Login;