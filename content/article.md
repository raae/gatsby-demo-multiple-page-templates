---
title: Demo Article
---

I'm baby beard umami twee, literally kinfolk lyft XOXO pour-over vegan. Live-edge four loko raw denim, letterpress bushwick blog vaporware sustainable craft beer tumblr wayfarers. YOLO authentic kinfolk, paleo fashion axe twee craft beer mustache etsy hot chicken prism kickstarter. Cliche actually crucifix, gluten-free vinyl offal VHS gentrify.

## Vaporware synth blog tumblr

Farm-to-table biodiesel swag vape plaid tousled sartorial gluten-free coloring book taxidermy air plant affogato glossier cardigan. Raw denim williamsburg semiotics plaid, ethical organic chia tacos crucifix synth etsy. Ethical green juice pickled mumblecore, four loko paleo helvetica vexillologist williamsburg normcore taxidermy trust fund meggings VHS. Art party blog offal dreamcatcher meditation portland master cleanse. Lumbersexual hell of craft beer pour-over disrupt heirloom air plant health goth. Vape hoodie cloud bread, skateboard succulents vaporware synth blog tumblr vegan unicorn small batch cronut.

Swag put a bird on it blue bottle bitters. Williamsburg tattooed gluten-free cardigan seitan craft beer bespoke marfa la croix jean shorts austin health goth. Pour-over cloud bread shaman sustainable, jianbing biodiesel authentic taiyaki cliche asymmetrical seitan unicorn snackwave green juice lumbersexual. Sartorial banjo cray pork belly, thundercats distillery gluten-free cloud bread skateboard.

Distillery organic helvetica pour-over crucifix semiotics drinking vinegar. Man braid tacos single-origin coffee intelligentsia VHS. Whatever man braid skateboard, single-origin coffee glossier occupy 8-bit shabby chic kogi neutra YOLO sustainable dreamcatcher. Brooklyn lyft hell of gochujang direct trade pug tacos ugh skateboard art party pitchfork ennui four loko man braid offal. Gastropub keytar cliche, letterpress cardigan leggings literally hashtag green juice kinfolk everyday carry ennui. Raclette palo santo air plant microdosing cray adaptogen. IPhone cliche food truck single-origin coffee knausgaard fam cloud bread banjo locavore adaptogen forage helvetica sriracha.

Keytar street art yuccie, pour-over twee next level brunch venmo. Banh mi readymade literally post-ironic cold-pressed etsy. Echo park waistcoat humblebrag mixtape williamsburg occupy deep v you probably haven't heard of them. Kogi cold-pressed normcore cronut af pickled chillwave adaptogen 8-bit offal meggings. Post-ironic lo-fi fingerstache la croix.

### SSG Page Code

```js
// src/pages/yt/{youTubeEmbed.id}.js

import React from "react";
import {graphql} from "gatsby";

import VideoLayout from "../../components/video-layout";

const SSGVideoPage = ({data}) => {
  return <VideoLayout {...data.youTubeEmbed} />;
};

export default SSGVideoPage;

export const query = graphql`
  query ($id: String) {
    youTubeEmbed(id: {eq: $id}) {
      title
      html
    }
  }
`;
```
