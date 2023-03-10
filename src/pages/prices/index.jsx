import { DefaultPage, Subtitle, Title } from "../../Components";

export default function Prices() {
    return <DefaultPage className="prices">
        <Subtitle> <strong>ВСИЧКИ КУРСОВЕ СЕ ПРЕДЛАГАТ И В ОНЛАЙН ФОРМАТ</strong></Subtitle>
        <Subtitle> <strong>ПОСОЧЕНИТЕ ЦЕНИ СА ЗА ЕДНОМЕСЕЧНО ОБУЧЕНИЕ!</strong> </Subtitle>
        <Subtitle> <strong>УРОЦИТЕ СЕ ПРОВЕЖДАТ В МАЛКИ ГРУПИ ДО 10 ЧОВЕКА</strong> </Subtitle>

        <ul style={{ lineHeight: "1.75em" }}>
            <li>
                Шах мат
                <ul>
                    <li>2 пъти седмично - понеделник/петък (1 час на урок) – 70 лева</li>
                    <li>Единичен урок – 15 лева</li>
                </ul>
            </li>
            <li>
                Английски език
                <ul>
                    <li>2 пъти седмично по 2 учебни часа – 100 лева</li>
                    <li>1 път седмично - 60 лева</li>
                    <li>Единичен урок - 15 лева</li>
                </ul>
            </li>
            <li>
                Руски език
                <ul>
                    <li>2 пъти седмично по 2 учебни часа – 90 лева</li>
                    <li>1 път седмично - 50 лева</li>
                    <li>Единичен урок - 13 лева</li>
                </ul>
            </li>
            <li>
                Български език и литература
                <ul>
                    <li>2 пъти седмично по 2 учебни часа- 120 лева</li>
                    <li>1 път седмично: 60 лева</li>
                    <li>Единичен урок: 20 лева</li>
                </ul>
            </li>
            <li>
                Математика
                <ul>
                    <li>2 пъти седмично по 2 учебни часа - 100 лева</li>
                    <li>1 път седмично - 50 лева</li>
                    <li>Единичен урок - 20 лева</li>
                </ul>
            </li>
            <li>
                География
                <ul>
                    <li>2 пъти седмично по 2 учебни часа - 125 лева</li>
                    <li>1 път седмично - 65 лева</li>
                </ul>
            </li>
            <li>
                "Забавна математика"
                <ul>
                    <li>Единичен урок - 20лв</li>
                    <li>За месец - 70 лв </li>
                </ul>
            </li>
            <li>
                Интензивна подготовка за нво
                <ul>
                    <li>Курс по математика 6 учебни часа седмично : 205 лева</li>
                    <li>Курс по български език и литература 6 учебни часа седмично: 205 лева</li>
                    <li>Обединено: 380 лева</li>
                </ul>
            </li>
            <li>
                Пробни матури за 4-ти,7-ми,10-ти и 12-ти клас
                <br />
                Предлагат се за всички предмети!
                <br />
                -60 лева (не се включва допълнителен урок ,,анализ на грешки'', за него се доплащат 30 лева)
            </li>
            <li>
                Пробни кандидатстудентски изпити за всички университети
                <ul>
                    <li>30 лева за български вуз-ове</li>
                    <li>100 лева за чуждестранни вуз-ове</li>
                </ul>
            </li>
        </ul>
        <Subtitle>Занималня</Subtitle>
        <ul>
            <li>
                Клуб 'интеракт' - забавни детски интелектуални и развлекателни игри
                <ul>
                    <li>1 път седмично за 1 час - 7 лева</li>
                    <li>2 пъти седмично - 35 лева</li>
                </ul>
            </li>
            <li>
                Занимания през почивни, празнични и ваканционни дни - 7 лева на час
            </li>
            <li>
                Занималня след училище от 13:00 до 18:00
                <ul>
                    <li>20лв на ден</li>
                    <li>90лв на седмица</li>
                    <li>300лв на месец</li>
                </ul>
            </li>
            <li>
                Целодневна занималня през почивните дни,уикенда и ваканциите:
                <ul>
                    <li>32лв на ден</li>
                    <li>55лв за уикенда</li>
                    <li>За месец 180лв(включва само събота и неделя)</li>
                </ul>
                <li>
                    Пакет комбинация за 2те занимални (всеки ден)
                    450лв на месец.
                </li>
            </li>
        </ul>





    </DefaultPage>
}