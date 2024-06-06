import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { FormEvent, ChangeEvent,useState, InvalidEvent} from 'react'

import styles from './Post.module.css'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
  }
  

interface PostProps{
    author: Author,
    publishedAt: Date,
    content: Content[];
}

export function Post({author,publishedAt,content} : PostProps){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      });
    
      const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
      });

    const [comments,setComments] = useState(["post muito bacana!"]);
    const [commentText, setCommentText] = useState('');

    function handleCommentChange(event : ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setCommentText(event.target.value);
    }

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();
        setComments([...comments,commentText]);
        setCommentText('');
    }

    function deleteComment(content:string){
       setComments(comments.filter(comment=>comment !== content))
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){   
        event.target.setCustomValidity('Esse campo não é válido')
    }
 
    const isNewCommentEmpty = commentText.length ===0;
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src={author.avatarUrl} alt="" /> 
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               {content.map((line) => {
                if(line.type === 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else if(line.type === 'link'){
                    return <p key={line.content}><a href='#'>{line.content}</a></p>
                }
               })}
            </div>
            <form 
                className={styles.commentForm}
                onSubmit={handleCreateNewComment}
            >
                <strong>Deixe o seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                    value={commentText}
                    onChange = {handleCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment 
                            key={comment} 
                            content = {comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}