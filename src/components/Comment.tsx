import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps{
    content:string;
    onDeleteComment: (comment: string) => void;
}

export function Comment ({content,onDeleteComment}: CommentProps){

    const [likeCount,setLikeCount] = useState(0);

    function handleComment(content:string){
        onDeleteComment(content)
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder = {false} src="https://github.com/tarciana23.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tarciana Oliveira</strong>
                            <time title="11 de Maio ás 08:13h" dataTime="2022-05-11 08:13:30">Cerda de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário" onClick={()=>onDeleteComment(content)}>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                    <footer>
                        <button onClick={() => setLikeCount(likeCount + 1)}>
                            <ThumbsUp/>
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}