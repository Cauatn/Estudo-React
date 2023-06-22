import style from './Main.module.scss';
import Secao from '../secao';


export default function Main() {
    return (
        <main>
            <div className={style.mainContainer}>
                <Secao tipo = {'Star Wars'}/>
                <Secao tipo = {'Consoles'} />
                <Secao tipo = {'Diversos'} />
            </div>
        </main>
    )
}