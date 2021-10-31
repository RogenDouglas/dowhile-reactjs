import styles from "./styles.module.scss";

import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export function ListMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api
      .get<Message[]>("/messages/last")
      .then((response) => setMessages(response.data));
  }, []);

  return (
    <div className={styles.containerWrapper}>
      <img src={logo} alt="DoWhile 2021" />

      <ul className={styles.listMessage}>
        {messages.map((message) => (
          <li className={styles.message} key={message.id}>
            <p className={styles.messageContent}>{message.text}</p>
            <div className={styles.messageUser}>
              <div className={styles.userImg}>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
