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
              Hello, I'm Cole Askey, a rising senior majoring in Computer Engineering at Penn State Behrend. I am actively seeking a Software Engineering Internship for the summer of 2023.

With a strong foundation in software development, I am proficient in several programming languages including Java, C++, Python, JavaScript, and MATLAB. I have a passion for software engineering and embedded systems, and I aspire to pursue a career in these fields.

One area where I excel is in digital design using VHDL. I enjoy utilizing my knowledge to create innovative and practical solutions through embedded projects.

If you have any opportunities or would like to learn more about my experience and skills, please feel free to reach out to me through the links below. I'm excited to connect and explore potential collaborations.
            </p>
          </div>

          <div>
            <div className={styles.Contact}><a id="emailMe" href="mailto:coleaskey32@gmail.com"> <button className={styles.btn1}>Contact Me</button></a></div>
            <div className={styles.Resume}><a href='https://pdfhost.io/v/SbVkWFn1d_Cole_Askey_Resume' download><button className={styles.btn2}>Download CV</button></a></div>
          </div>
    </div>
  )
}
