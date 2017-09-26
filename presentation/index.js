// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Deck,
    Heading,
    Markdown,
    CodePane,
    List,
    ListItem,
    Link,
    Slide,
    Text,
    Fill,
    Code,
    Appear
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require('../assets/font-awesome/css/font-awesome.min.css');
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// images
const images = {
    layout     : require("../assets/layout.png"),
    confused   : require("../assets/kat.png"),
    babelLogo  : require("../assets/babel.png"),
    gulpLogo   : require("../assets/gulp.png"),
    gruntLogo  : require("../assets/grunt.png"),
    npmLogo    : require("../assets/npm.png"),
    yarnLogo   : require("../assets/yarn.png"),
    webpackLogo: require("../assets/webpack.png")
};
// gifs
const gifs   = {
    enough: require("../assets/enough.gif"),
    what  : require("../assets/what.gif"),
    cube  : require("../assets/cube.gif")
};

preloader(images);
preloader(gifs);

// code for slide about const
const htmlCode =
          `<div class="wrapper">
  <nav class="navbar">
    Navbar
  </nav>
  
  <header class="header">
    Header
  </header>
  
  <div class="main">
    <aside class="main-sidebar">SideBar</aside>
    <div class="main-content">Main Content</div>
  </div>
  
  <footer class="footer">
    Footer
  </footer>
</div>`;

const cssGrid =
          `.container {
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 90px 1fr 50px;
  
  grid-template-areas: 
    "header header header"
    "nav main actions"
    "footer footer footer";
 
  min-height: 100vh;
}

.header {
  grid-area: header;
}

.left {
  grid-area: nav;
}

.right {
  grid-area: actions;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}`;

const theme = createTheme({
    primary   : "#3679B5",
    secondary : "#f8b72b",
    tertiary  : "#474647",
    quartenary: "white"
}, {
    primary  : "Helvetica Neue",
    secondary: "Montserrat",
    awesome  : "FontAwesome"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["fade", "fade"]} transitionDuration={500} theme={theme}>

                <Slide transisiton={["fade"]} bgColor="primary">
                    <Heading size={2} fit caps textColor="quartenary">Basic Layout</Heading>

                    <Link bold href="https://codepen.io/liorgrs/full/MyGEQa?editors=1100" target="blank"
                          textColor="secondary">
                        <i className="fa fa-codepen"/> View on codepen
                    </Link>
                </Slide>

                <Slide transisiton={["fade", "slide"]} bgImage={gifs.cube}/>

                <CodeSlide
                    textSize={30}
                    transition={["fade"]}
                    lang="html"
                    bgColor="tertiary"
                    code={htmlCode}
                    ranges={[
                        {loc: [0, 18], title: ": flex"},
                        {loc: [0, 1], note: ".wrapper { display: flex; flex-direction: column; }"},
                        {loc: [9, 13], note: ".main { display: flex; }"},
                        {loc: [10, 11], note: ".main-sidebar { max-width: 300px; min-width: 200px }"},
                        {loc: [11, 12], note: ".main-content { flex-grow: 1; }"}
                    ]}
                />

                <Slide transisiton={["fade", "slide"]} bgColor="quartenary">

                    <Heading size={2} caps textColor="primary">conclusion</Heading>

                    <Appear fid="1">
                        <Text lineHeight={1.2}>
                            Every opposite dimension requires adding an extra <Code>.wrapper</Code> (or any container
                            component).
                        </Text>
                    </Appear>

                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Heading size={1} caps lineHeight={1} textColor="secondary" textFont="secondary">
                        Welcome
                    </Heading>
                    <Text margin="10px 0" textColor="quartenary" size={1} fit>
                        {"{ display : grid }"}
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Link bold href="https://codepen.io/liorgrs/full/GMgwmN" target="blank"
                          textColor="secondary">
                        <i className="fa fa-codepen"/> CSS-Grid Holy Grail
                    </Link>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary">
                    <Heading textColor="secondary" caps>Why?</Heading>
                    <List textColor="quartenary">
                        <Appear><ListItem>2 Dimensional</ListItem></Appear>
                        <Appear><ListItem>Contextual (structure is described in CSS)</ListItem></Appear>
                        <Appear><ListItem>Back to media queries (very few of them)</ListItem></Appear>
                    </List>

                    <Appear>
                        <Link bold href="https://codepen.io/liorgrs/full/GMgwmN" target="blank"
                              textColor="secondary">
                            <i className="fa fa-codepen"/> View on codepen
                        </Link>
                    </Appear>
                </Slide>

                <CodeSlide
                    textSize={30}
                    transition={["fade"]}
                    lang="css"
                    bgColor="tertiary"
                    code={cssGrid}
                    ranges={[
                        {loc: [0, 21]},
                        {loc: [0, 12]},
                        {loc: [2, 4], note: 'fr = fraction'},
                        {loc: [5, 9]},
                        {
                            loc : [13, 16],
                            note: 'grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;'
                        },
                        {
                            loc : [17, 20],
                            note: 'grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;'
                        },
                        {
                            loc : [21, 23],
                            note: 'grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;'
                        },
                        {
                            loc : [25, 28],
                            note: 'grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;'
                        },
                        {
                            loc : [29, 32],
                            note: 'grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;'
                        },
                    ]}
                />

                <Slide transition={["fade"]} bgColor="primary">
                    <Heading textColor="secondary" caps>References</Heading>
                    <List textColor="white">
                        <ListItem >
                            <Link textSize={35} href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="blank"
                                  textColor="white">
                                {/*<i className="fa fa-codepen"/> */}
                                A Complete Guide To css - CSS Tricks
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link textSize={35} href="https://github.com/FormidableLabs/spectacle" target="blank"
                                  textColor="white">
                                {/*<i className="fa fa-codepen"/> */}
                                Spectacle - ReactJS based Presentation Library
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link textSize={35} href="https://bitsofco.de/holy-grail-layout-css-grid" target="blank"
                                  textColor="white">
                                {/*<i className="fa fa-codepen"/> */}
                                CSS Grid Holy Grail Layout
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link textSize={35} href="https://gridbyexample.com/examples/" target="blank"
                                  textColor="white">
                                {/*<i className="fa fa-codepen"/> */}
                                CSS Grid Examples
                            </Link>
                        </ListItem>


                        <ListItem>
                            <Link textSize={35} href="https://www.youtube.com/watch?v=txZq7Laz7_4" target="blank"
                                  textColor="white">
                                <i className="fa fa-youtube-play"/> CSS Grid Changes Everything (About Web Layouts)
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link textSize={35} href="https://www.youtube.com/watch?v=jV8B24rSN5o&t=899s" target="blank"
                                  textColor="white">
                                <i className="fa fa-youtube-play"/> CSS Grid Crash Course
                            </Link>
                        </ListItem>
                    </List>

                </Slide>

            </Deck>
        );
    }
}

// TODO: Add resources slide.
// TODO: Add examples where we can implement it on our product.
