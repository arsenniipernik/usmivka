import { Link } from '../../Components'
import React from "react"

function Content() {
    return <>
        <div className="content">
            {/* <Link hoverable bold link = "/about" content = "Кои сме ние" secondary/> */}
            <Link hoverable bold link = "/timetable" content = "График" secondary/>
            <Link hoverable bold link = "/lessons" content = "Уроци" primary/>
        </div>
        <p style={{ color: "white", opacity: 0.8, textAlign: "center" }}>
          Уроците се провеждат в зала 1 ул Теменуга 1б ж.к Слатина(до пазарчето)
        </p>
    </>
}

export default Content;