import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

//Acrescentando o extrends pegamos todas a propriedades "nativas" do elemento
//img que está dentro do componente Avatar

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    //src: string;
    //alt?: string;Dessa forma podemos retirar o src e o alt
}
export function Avatar({hasBorder = true,...rest}: AvatarProps){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...rest}
        />
    )
}