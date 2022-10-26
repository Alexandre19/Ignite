import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Alexandre19.png" />
                    <div className={styles.authorInfo}>
                        <strong>Alexandre Borges</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="18 de outubro ás 17:25" dateTime="2022-10-18 17:25:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera ✌️</p>
                <p>Acabei de criar mais um projeto para o meu portfólio, assim que vocês puderem deem uma olhada lá e me falem o que acharam.</p>
                <p>Para me contratar é só chamar no email abaixo 👇</p>
                <p>👉 {' '} <a href="">alexandre.dev@gmail</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#rocket</a>{' '}
                    <a href="">#ignite</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )

}