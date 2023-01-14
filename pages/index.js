import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import MyImage from '../components/MyImage'
import RouteButton from '../components/RouteToSite'
import Download from '../components/Download'
import styles from '../styles/main.module.css'
import Linkedin from '../asset/Linkedin.png'
import GitHubPic from '../asset/GitHubPic.png'

export default function Home() {
  return (
    <div>
      <div className={styles.head}>
        <Nav />
          <Head>
            <title>Cole Askey</title> 
            <meta name='keywords' content='Cole Askey, About' />
          </Head>
        </div>
        <div className={styles.topMainPage}>
            <div className={styles.ImageAndLinks}>
              <div className= {styles.MyImage}><MyImage /></div>
              <div className= {styles.Links}>
                <RouteButton image={GitHubPic} destination={'https://github.com/coleaskey32'}/> 
                <RouteButton image={Linkedin} destination={'https://www.linkedin.com/in/cole-askey-099b06200/'}/>
              </div>
            </div>
        </div>
          <div>
            <p className= {styles.paragraph}>
              Hey there, thank you for dropping by. My name is Cole Askey and I am a Computer Engineering student at Penn State Behrend. I am currently working at Accuride as an Engineering intern.
              I've been programming for two years now and have experience with C++, Python, and Javascript.
              I'm open for a Software Engineering Internship for the summer of 2023. Please check out my resume in the link below and email me if you would like to hear more about what I can bring and my past experiences.
            </p>
          </div>

          <div>
            <div className={styles.Contact}><a id="emailMe" href="mailto:coleaskey32@gmail.com"> <button className={styles.btn1}>Contact Me</button></a></div>
            <div className={styles.Resume}><a href='https://pdfhost.io/v/P5N5L7tl._Cole_Askey_Resume' download><button className={styles.btn2}>Download CV</button></a></div>
          </div>
    </div>
  )
}
