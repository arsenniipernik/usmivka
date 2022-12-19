import { DefaultPage } from "../../Components";

import "./index.css"

export default function Timetable() {
    return <DefaultPage className="page timetable-page" >

        <ul>
            <li>
                Понеделник
                <ul>
                    <li>АНГЛИЙСКИ 10;00-12;00</li>
                    <li>НВО МАТ ГРУПА 1 : 10:00-12:00</li>
                    <li>НВО БЕЛ ГР 1 : 12:30-14:30</li>
                    <li>КЛУБ ДОМАШНА РАБОТА:14:30-15:30</li>
                    <li>ШАХ-МАТ:15:30-16:30</li>
                    <li>БЪЛГАРСКИ И ЛИТ. : 16;45-17:45</li>
                </ul>
            </li>
            <li>
                Вторник
                <ul>
                    <li>РУСКИ 9;00-10;00</li>
                    <li>НВО МАТ ГРУПА 2 10;00-12;00</li>
                    <li>НВО БЕЛ ГР2 12;30-14;30</li>
                    <li>КЛУБ ДОМАШНА РАБОТА 14;30-15;30</li>
                    <li>ГЕОГРАФИЯ 15;40-16;40</li>
                    <li>КЛУБ ИНТЕРАКТ 16;45-17;45</li>
                </ul>
            </li>
            <li>
                Сряда
                <ul>
                    <li>НВО МАТ ГР1 9;00-11.00</li>
                    <li>НВО БЕЛ ГР1-11;15-14;15</li>
                    <li>КЛУБ ДОМАШНА РАБОТА 14;30-15;30</li>
                    <li>МАТЕМАТИКА;18;30-19-30</li>
                </ul>
            </li>
            <li>
                Четвъртък
                <ul>
                    <li>НВО МАТ ГР 2 9;00-11;00</li>
                    <li>НВО БЕЛ ГР 2 11;10-14.10</li>
                    <li>КЛУБ ДОМАШНА РАБОТА 14;30-15;30</li>
                    <li>КЛУБ ИНТЕРАКТ 16;45-17;45</li>
                </ul>
            </li>
            <li>
                Петък
                <ul>
                    <li>АНГЛИЙСКИ 9;00-10;00</li>
                    <li>РУСКИ 10;15-11;15</li>
                    <li>ГЕОГРАФИЯ 11;30-12;30</li>
                    <li>КЛУБ ДОМАШАНА РАБОТА 14;30-15;30</li>
                    <li>ШАХ-МАТ 15;30-16;30</li>
                    <li>БЪЛГАРСКИ 16;46-17;45</li>
                    <li>МАТЕМАТИКА 18;30-19;30</li>
                </ul>
            </li>
            <li>
                Събота
                <ul>
                    <li>АНГЛИЙСКИ 9;00-10;00</li>
                    <li>ГЕОГРАФИЯ 10;15-11;15</li>
                    <li>РУСКИ 11;30-12;30</li>
                    <li>МАТЕМАТИКА 13.00-14.00</li>
                    <li>КЛУБ ДОМАШНА РАБОТА 14;30-15;30</li>
                    <li>НВО МАТ ГР 3    15;30-17;30</li>
                    <li>НВО БЕЛ ГР 3    17;45-19;45</li>

                </ul>
            </li>
            <li>
                Неделя
                <ul>
                    <li>АНГЛИЙСКИ 9.00-10.00</li>
                    <li>ГЕОГРАФИЯ 10.15-11.15</li>
                    <li>РУСКИ 11;30-12;30</li>
                    <li>МАТЕМАТИКА 13.00-14.00</li>
                    <li>КЛУБ ДОМАШНА РАБОТА 14;30-15;30</li>
                    <li>НВО МАТ ГР 3 15;30-17;30</li>
                    <li>НВО БЕЛ ГР 3 17;45 – 19 45</li>
                </ul>
            </li>
        </ul>
    </DefaultPage>
}