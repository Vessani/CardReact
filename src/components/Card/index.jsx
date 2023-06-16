import posterImg from "../../assets/starwars.jpg"
import Button from "../Button"
import Paragraph from "../Paragraph"
import Title from "../Title"
import styles from "./styles.module.css"

export default function Card() {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
            <div>
                <Title />
                <Paragraph />
                <Button />
            </div>

        </div>
    )
}
