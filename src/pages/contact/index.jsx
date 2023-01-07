import { DefaultPage, Subtitle } from "../../Components";

export default function ContactPage() {
    return <DefaultPage>
        <div style={{ padding: "0 calc(50% - 300px)" }}>

            <br />
            089 277 1038
            <br />
            Имейл адрес: detskashkolausmivka@gmail.com
            <br />
            <a style={{ color: "var(--very-light-cyan)" }} href="https://www.facebook.com/profile.php?id=100089185053577&mibextid=ZbWKwL" rel="external noopener noreferrer" target="_blank" >Фейсбук</a>

            <Subtitle><strong style={{ color: "white" }}>
                Уроците се провеждат в зала 1 ул Теменуга 1б ж.к Слатина (до пазарчето)
            </strong>
            </Subtitle>
        </div>
    </DefaultPage>
}