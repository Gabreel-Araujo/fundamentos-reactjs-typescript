import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'
interface CommentPropos{
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment({content,onDeleteComment}:CommentPropos){
    const [likeCount,setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1 );
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://th.bing.com/th/id/OIP.3aGBLvC-_VA7RWf4FsOBVwHaLG?pid=ImgDet&rs=1" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joao almeida</strong>
                            <time title='11 de maio às 8:45' dateTime='2022-05-11 08:45:25'>Cerca de 1hr atrás </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Botao de Deletar Comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
              
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}