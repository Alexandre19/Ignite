import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Alexandre19.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alexandre Borges</strong>

                            <time title="18 de outubro ás 17:25" dateTime="2022-10-18 17:25:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                        <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                </div>

                <footer>
                  <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                  </button>
                </footer>
            </div>
        </div>
    )
}