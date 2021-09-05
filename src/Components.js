//Here are complex and often-used components that 
//can be imported and simply used

import React, { createContext, useState, useContext, useEffect, createRef } from "react"
import VideoPlayer from "react-video-js-player"
import { GetFormattedLessons, lessons } from "./Assets"
import { GetCookie, SetCookie, ThemeContext } from "./Utilities"
import { NavLink, withRouter } from "react-router-dom"


function ButtonOrLink(props) {
  let className = "button"
  className += props.className ? " " + props.className : "";
  className += props.bold ? " bold" : "";
  className += props.secondary ? " secondary" : "";
  className += props.primary ? " primary" : "";
  className += props.shake ? " shake" : "";
  className += props.lightning ? " lightning" : "";

  let lightning = null;

  if (props.lightning) {
    lightning =
      <svg height="100%" width="100%" viewBox="0 0 40 30">
        <polyline points="0,10 5,5 20,0 30,20 40,10" />
        <polyline points="0,10 5,20 20,0 30,0 40,10" />
        <polyline points="0,10 5,0 20,10 30,10 40,10" />
      </svg>
  }

  let innerContent =
    <>
      {props.content}
      {props.children}
      {lightning}
    </>

  let el = null;

  if (props.link) {
    className += " link";

    if (props.onClick) {
      console.warn("'onClick' event listenner for Button component will be ignored as 'link' property is set")
    }

    let url = window.location.pathname;
    el =
      <NavLink onClick={() => {
        if (url !== "/login" && url !== "/signup") {
          sessionStorage.setItem("lastPageBeforeAuth", url);
          console.log(url)
        }
      }} to={props.link} className={className}>
        {innerContent}
      </NavLink>;
  }
  else {
    if (props.onClick) {
      el =
        <button className={className} onClick={e => { props.onClick(e) }}>
          {innerContent}
        </button>
    }
    else {
      console.error("Button must have eihter 'link' on 'onClick' property")
    }
  }

  return el;
}

function Button(props) {
  if (!props.onClick) {
    console.warn("'Button' component should have 'onClick' event listenner");
  }
  return <ButtonOrLink {...props} />
}

function Link(props) {
  if (!props.link) {
    console.error("'Link' component must have 'link' property set");
    return null;
  }
  return (<ButtonOrLink {...props} />)
}

function Img(props) {
  let [src, SetSource] = useState("");

  useEffect(() => {
    let img = new Image(props.width, props.height)
    img.src = props.src;
    img.onload = e => {
      SetSource(img.src);
    }
  }, [])

  return (
    <img alt={props.alt} className={props.className} src={src} />
  )
}

function Input(props) {
  let [hidden, Hide] = useState(true);
  let [empty, IsEmpty] = useState(true);

  let ref = createRef()

  useEffect(() => {
    if (props.fontSize) {
      ref.current.style.setProperty("--font-size", props.fontSize);
    }
  })

  let showOrHide = null;

  let label = props.placeholder;
  let icon = props.icon;
  let checkbox = props.checkbox;


  if (checkbox) {
    label = props.label;
    icon = null;
  }

  if (props.password && !props.hidden) {
    showOrHide = <i className={"show-or-hide fas fa-eye" + (hidden ? "" : "-slash")} onClick={e => {
      e.preventDefault();
      e.stopPropagation();
      Hide(!hidden);
    }} />
  }


  return (
    <div ref={ref} className={"input" + (empty ? " empty" : "")
      + (props.sharpCorners ? "" : " rounded")
      + (props.fog ? " fog" : "")
      + (checkbox ? " checkbox" : "")
      + (props.password ? " password" : "")}
      style={{ width: props.width }}>

      <input type={(props.password && hidden) ? "password" : (checkbox ? "checkbox" : "")} onChange={e => {
        props.OnInput && props.OnInput(e);
        IsEmpty(!(e.target.value));
      }} />

      {checkbox &&
        <div className="box">
          <i className="fa fa-check" />
        </div>
      }

      {icon}

      <div className="input-label">
        {label}
      </div>

      <div className="fog" />

      {showOrHide}
    </div>
  )
}

function Textarea(props) {
  return (
    <div className="textarea">
      <textarea placeholder="Оставете коментар" onInput={e => {
        props.OnInput && props.OnInput(e.target.value);
        e.target.parentNode.dataset.value = e.target.value;
      }}></textarea>
    </div>
  )
}

function DropdownElement(props) {
  return (
    <li>
      <Button name={props.name} link={props.link} />
    </li>
  );
}

function Dropdown(props) {
  let options = props.options instanceof Array && props.options.map((el, i) => {
    if (el.link) {
      return <Link key={i} {...el} />
    }
    if (el.onClick) {
      return <Button key={i} {...el} />
    }
    if (React.isValidElement(el)) {
      return React.cloneElement(el, { key: i });
    }
    console.log(React.isValidElement(el));
    return null;
  })

  return (
    <div className={"dropdown" + (props.right ? " right" : "") + (props.className ? " " + props.className : "")}>
      <button>{props.content}</button>
      <div className="options-wrapper" style={{ paddingTop: props.offset + "px" }}>
        <div className="options">
          {options}
          {props.children}
        </div>
      </div>
    </div>
  )
}


function ThemeToggle() {
  let context = useContext(ThemeContext);
  let [rot, setRot] = useState(GetCookie("theme") === "dark" ? 180 : 0);

  return (
    <div className="theme-toggle">
      <div style={{ transform: `rotateZ(${rot}deg)` }} onClick={() => { setRot(rot + 180) }}>
        <div className="dark" onClick={context.ToggleTheme}>
          <i className="fas fa-moon" />
        </div>
        <i className="light fas fa-sun" onClick={context.ToggleTheme} />
      </div>
    </div>
  )
}


function DefaultSearchResultsDisplayer(props) {
  return (
    <Window className="search-results" OnClose={() => { props.OnClose() }}>
      <Subtitle title={"Резултати от търсенето"} />
      {props.results.map((el, i) => {
        el = el.section;
        return <div key={i}>
          {el.url ? <Link link={"/lessons/" + el.url} content={el.title} /> : <h4>{el.title}</h4>}
          <div>{el.sections ? JSON.stringify(el.sections) : null}</div>
        </div>
      })}
    </Window>
  )
}

function Search(request, constrictions) {

  const k = { order: 0, exact: 1000, lengthDif: 0.5, length: 10, wordTreshold: 0.1, treshold: 1000, mistakeCost: 0.5 }


  //Tries to match string1 in string2
  function RelativeMatch(string1, string2) {
    if (!string1.trim() || !string2.trim()) {
      return 0;
    }


    if (string1.trim().toUpperCase() === string2.trim().toUpperCase()) {
      //return k.exact;
    }

    string1 = string1.toUpperCase().split(" ");
    string2 = string2.toUpperCase().split(" ");



    let matches = [];

    //w stands for word
    for (let w1i in string1) {
      let w1 = string1[w1i];
      for (let w2i in string2) {

        let w2 = string2[w2i];

        let max_match = 0;

        //To do: remove two similar loops

        // o stands for offset
        for (let o = w2.length - 1; o >= -w1.length; o--) {
          let match = 0;
          let lo = 0;

          if (o > 0) {
            for (let i = 0; i + lo < w1.length && i + o < w2.length; i++) {
              if (w1[i + lo] === w2[i + o]) {
                match++;
              }
              else {
                match -= k.mistakeCost;

                if (i && w1[i + lo - 1] === w2[i + o]) {
                  lo--;
                } else if (i + lo < w1.length - 1 && w1[i + lo + 1] === w2[i + o]) {
                  lo++;
                }
              }
            }
          } else {
            for (let i = 0; i - o < w1.length && i + lo < w2.length; i++) {
              if (w1[i - o] === w2[i + lo]) {
                match++;
              }
              else {
                match -= k.mistakeCost;

                if (i + lo && w1[i - o] === w2[i + lo - 1]) {
                  lo--;
                } else if (i + lo < w2.length - 1 && w1[i + o] === w2[i + lo + 1]) {
                  lo++;
                }
              }
            }
          }

          if (match > max_match) {
            max_match = match;
          }
        }



        let match = Math.pow(max_match, k.length) / w1.length;



        if (matches.length && matches[matches.length - 1].string2 < w2i) {
          match *= 1 + k.order;
        }

        if (match) {
          console.log(w1, w2, max_match, match);
        }

        if (max_match / w1.length > k.wordTreshold) {
          matches.push({ string1: w1i, string2: w2i, match });
        }
      }
    }

    //return matches;


    return matches.reduce((sum, current, i) => {
      // if(current.match === 1)
      // {
      //   return sum + k.full_word;
      // }
      return sum + current.match
    }, 0) * (1 - k.lengthDif * Math.abs(string1.length - string2.length) / Math.max(string1.length, string2.length));
  }


  let results = [];

  function Match(section) {

    let points = RelativeMatch(request, section.title);

    if (points) {
      results.push({ section, points });
    }

    if (section.sections instanceof Array) {
      section.sections.forEach(Match);
    }
  }



  if (!constrictions) {
    constrictions = {};
  }

  if (!constrictions.lessons) {
    let grades = GetFormattedLessons(lessons.biology);

    Match({ title: "Биология", sections: grades });
  }

  results.sort((first, second) => second.points - first.points);
  results = results.filter(({ points }) => points > k.treshold);

  return results;
}

function SearchField(props) {
  let [expanded, Expand] = useState(false);
  let [keepExpanded, KeepExpanded] = useState(false);
  let [searchRequest, SetSearchRequest] = useState("");
  let [searchResult, SetSearchResult] = useState(null);


  useEffect(() => {
    document.addEventListener("click", () => {
      KeepExpanded(false);
      Expand(false);
      SetSearchRequest("");
    })
  }, [])

  function OnHover() {
    Expand(true);
  }

  function OnMouseLeave() {
    if (!keepExpanded) {
      Expand(false);
    }
  }

  function OnClick(e) {
    Expand(true);
    KeepExpanded(true);
    e.stopPropagation();
  }

  function OnSearch() {
    let results = Search(searchRequest);
    console.log(results);

    props.onSearch && props.onSearch(results);

    if (props.SearchResultsDisplayer) {
      SetSearchResult(<props.SearchResultsDisplayer OnClose={() => { SetSearchResult(null) }} results={results} />);
    }
    else {
      SetSearchResult(<DefaultSearchResultsDisplayer OnClose={() => { SetSearchResult(null) }} results={results} />);
    }
  }

  return (
    <div className={"search" + (searchRequest ? "" : " empty") + (expanded ? " expanded" : "")} onMouseEnter={OnHover} onMouseLeave={OnMouseLeave} onClick={OnClick} style={{ width: expanded ? props.width : "0px" }}>
      <i className="fas fa-search" onClick={OnSearch} />
      <input placeholder={props.placeholder} value={searchRequest} onKeyDown={e => { (e.key === "Enter") && OnSearch(); }} onInput={e => {
        SetSearchRequest(e.target.value);
      }} />
      <i className="fas fa-plus" onClick={() => { SetSearchRequest("") }} />

      {searchResult}
    </div>
  );

}


function Title(props) {
  return (
    <div className={"content-title" + (props.subtitle ? " content-subtitle" : "")}>
      {props.name}
      {props.title}
      {props.content}
      {props.children}
    </div>)
}

function Subtitle(props) {
  return (<Title subtitle {...props} />)
}

function Video(props) {
  return (
    <div className="video">
      <VideoPlayer {...props} className="vjs-fluid" />
    </div>)
}

function Window(props) {

  function Close() {
    if (props.OnClose) {
      props.OnClose();
    }
  }

  return (
    <div className="window">
      <i className="fas fa-plus" onClick={() => { Close() }} />
      {props.children}
    </div>
  )
}


function DefaultMenu(props) {
  let options = [
    { content: "Вход", link: "/login", className: "bold" },
    { content: "Регистрация", link: "/signup", className: "bold" },
    { content: "Pro акаунт", shake: true, lightning: true, link: "/pro", className: "bold" },
    { content: "Уроци", link: "/lessons", className: "bold" },
    { content: "Университети", link: "/universities", className: "bold" },
    { content: "Правила и условия", link: "/terms-and-conditions", className: "light" },
    { content: "Защита на данни", link: "/copyright", className: "light" },
    { content: "Съобщете за проблема", link: "/raise-a-problem", className: "light" }
  ]

  if (props.themeToggle) {
    options.push(<ThemeToggle />);
  }

  return (
    <Dropdown right={props.right} offset={20} className="default-menu" content={<i className="fas fa-bars" />} options={options}>
    </Dropdown>
  )
}

function Footer() {
  return (
    <div className="footer" >
      <Link className="home" link="/">
        <img alt="logo" src="/Images/LogoLightCyan.png" className="light" />
        <img alt="logo" src="/Images/LogoDark.png" className="dark" />
      </Link>

      <div className="social">
        <a target="_blank" rel="external noopener noreferrer" href="https://instagram.com/"><i className="fab fa-instagram" /></a>
        <a target="_blank" rel="external noopener noreferrer" href="https://web.telegram.org/"><i className="fa fa-telegram" /></a>
        <a target="_blank" rel="external noopener noreferrer" href="https://facebook"><i className="fab fa-facebook" /></a>
      </div>

      <div className="links">
        <Link content="Уроци" link="/lessons" />
        <Link content="Университети" link="/universities" />
        <Link content="За julemy" link="/about" />
      </div>

    </div>
  );
}

function LegalityBar() {
  return (
    <div className="legality-bar">
      <Link link="/terms-and-conditions">Правила и условия</Link>
      <Link link="/privacy-policy">Запазване на данни</Link>
      <span><i className="far fa-copyright" /> Julemy.bg</span>
    </div>
  )
}

function DefaultNavbar(props) {
  return (
    <div className="navbar">
      <DefaultMenu themeToggle />
      {props.search && <SearchField {...props.search} />}
      <Link className="home" link="/">
        <img alt="logo light" src="/Images/LogoDark.png" className="dark" />
        <img alt="logo light" src="/Images/LogoLightCyan.png" className="light" />
      </Link>
    </div>
  )
}

function DefaultPage(props) {
  return (
    <div className={"page " + (props.className ? props.className : "")}>
      <DefaultNavbar />
      <div className="content">
        {props.children}
      </div>
      <Footer />
      <LegalityBar />
    </div>
  )
}

export {
  Link,
  Button,
  Input,
  Img,
  Textarea,
  Dropdown,
  DropdownElement,
  SearchField,
  Title,
  Subtitle,
  Video,
  ThemeToggle,

  Footer,
  LegalityBar,
  DefaultMenu,
  DefaultNavbar,
  DefaultPage,

  //Next are exported for testing and shouldn't be used directly
  Search
};