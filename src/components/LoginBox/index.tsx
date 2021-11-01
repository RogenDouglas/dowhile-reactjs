import { FaGithub } from "react-icons/fa";
import { useAuth } from "../../contexts/auth";

import styles from "./styles.module.scss";

export function LoginBox() {
  const { signInUrl } = useAuth();

  return (
    <div className={styles.containerWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <FaGithub size={25} />
        Entrar com Github
      </a>
    </div>
  );
}
