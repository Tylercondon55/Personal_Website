import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
       <header>
        {/*<Title title={this.props.title} />*/}
        {/*<input value={this.props.title} onChange={this.handleChange.bind(this)} />*/}
        <div class="header">
          <div class="icon"><img class="header_img" src="img/seal.jpg" alt="seal" height="55" width="55"></img></div>
          <div class="name">Tyler Condon</div>
          <div class="linkedin"><a href="https://www.linkedin.com/in/tyler-condon-368393a3/" rel="noopener noreferrer" target="_blank">Linkedin</a></div>
          <div class="github"><a href="https://github.com/Tylercondon55/" rel="noopener noreferrer" target="_blank">GitHub</a></div>
          <div class="resume"><a href="img/Resume.pdf" rel="noopener noreferrer" target="_blank">Resume</a></div>
        </div>
        </header>
        <div class ="content">
            <div class = "cover"><img class="header_img" src="img/cover_img.jpeg" alt="seal" height="350" width="350"></img></div>
            <div class = "jerryseinfeld"><p><i>"If a book about failures doesn’t sell, is it a success?"</i><br></br>&mdash;<a href="http://jerryseinfeld.com/" rel="noopener noreferrer" target="_blank">Jerry Seinfeld</a></p></div>
            <div class = "winstonchurchill"><p><i>"A lie gets halfway around the world before the truth has a chance to get its pants on."</i><br></br>&mdash;<a href="https://en.wikipedia.org/wiki/Winston_Churchill" rel="noopener noreferrer" target="_blank">Winston S. Churchill</a></p></div>
        </div>
        <div>
            <h1> Tyler Jeffrey Condon <br></br>Software Engineer</h1>
            <p> <a href="mailto:Tylercondon55@gmail.com">tylercondon55@gmail.com</a> </p>
            <p> I have never been able to write a good about me. I would like to think that I&#39;m an unique person and I have interesting things to say.
                However, when it comes to encapsulating that in an about me my mind drifts toward giving out rudimentary information about my life. For
                example I was born in San Diego, California, I graduated with a Bachelor&#39;s of Science in Computer Engineering and I am currently working
                as a Software Developer at International Business Machines (more commonly referred to as IBM). *whew* Sorry if I losted you there.</p>

            <p>Now that I&#39;ve dispensed with my place of origin, alma mater and occupation I find myself at a loss for words. I suppose hobbies would be
               a good place to start. For several years now I&#39;ve been learning Japanese. My whole life I have a been a big anime fan (probabbly lost a lot
               of people there). I had a pretty standard proegression for an anime fan. I watched Dragonball in elementary school, Naruto in middle school and
               Bleach in high school. Unfortunately, I committed the cardinal sin of anime watching... For all these animes I watched the dub version! I didn&#39;t
               realize the error of my ways until college. I watched and rewatched multiple animes as god intented (if you still watch the dubbed version, please
               stop immediately).</p>

               <p>This brings me to my original desire to learn Japanese. The simple goal of watching all my favorite anime without having to read the subtitles.
               In truth I had always wanted to learn a foreign language. My determination to achieve fluency in Japanese was unwavering. I exclusively listed to
               Japanese music, Only watched Japanese programs and talk to as many native speakers that would tolerate talking to me. After several months my ambition
               grew. I decided that I wouldn&#39;t be satisfied until I was living in Japan. This brings me to my current aspiration. Working in Japan as a software developer.
               </p>
        </div>
       </div>
    );
  }
}
