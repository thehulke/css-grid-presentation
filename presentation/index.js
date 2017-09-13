// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// images
const images = {
  confused: require("../assets/kat.png"),
  babelLogo: require("../assets/babel.png"),
  gulpLogo: require("../assets/gulp.png"),
  gruntLogo: require("../assets/grunt.png"),
  npmLogo: require("../assets/npm.png"),
  yarnLogo: require("../assets/yarn.png"),
  webpackLogo: require("../assets/webpack.png")
};
// gifs
const gifs = {
  enough: require("../assets/enough.gif"),
  what: require("../assets/what.gif")
};

preloader(images);
preloader(gifs);

// code for slide about const
const constCode = 
`const foo = 'bar';
foo = 'baz';`;

const theme = createTheme({
  blue: "#0084ff",
  yellow: "#EEB902",
  grey: "#474647",
  white: "white"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={2} fit caps lineHeight={1} textColor="yellow">
            Liorush
          </Heading>
          <Text margin="10px 0 0" textColor="white" size={1} fit bold>
            Matoki amiti :)
          </Text>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          bgColor="grey"
          code={constCode}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 2], note: "Uncaught TypeError: Assignment to constant variable." }
          ]}
        />

      </Deck>
    );
  }
}
