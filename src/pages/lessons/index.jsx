import { DefaultPage, Subtitle } from "../../Components";

export default function Lessons() {
    return <DefaultPage>

        <Subtitle>Ние предлагаме:</Subtitle>
        <strong style={{textAlign: "center", textDecoration: "underline"}}>Всички курсове се предлагат с възможност за онлайн обучение.</strong> 

        <ul>
            <li>Интензивни курсове по подготовка за НВО по Български и Математика за 4ти и 7ми клас.</li> 
            <li>Курсове по математика за училищна подготовка</li>
            <li>Курсове по български за училищна подготовка</li>
            <li>Курсове по Руски език</li>
            <li>Курсове по Английски език</li>
            <li>Курсове по География</li>
            <li>Шах-мат за деца</li>
            <li>"Забавна математика" (1-ви до 6-ти клас)</li>
            {/*  */}
        </ul>
    </DefaultPage>
}
