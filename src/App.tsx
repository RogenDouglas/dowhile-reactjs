import styles from "./App.module.scss";

import { ListMessages } from "./components/ListMessages";
import { LoginBox } from "./components/LoginBox";

export function App() {
  return (
    <main className={styles.containerWrapper}>
      <ListMessages />
      <LoginBox />
    </main>
  );
}
