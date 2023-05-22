import cape from "../assets/backgroud.png"
import logo from "../assets/logo.png"
import me from "../assets/me.png"
import csharp from "../assets/C Sharp.png"
import photoshop from "../assets/photoshop.png"
import unity from "../assets/unity.png"
import html from "../assets/html-5.png"

const Main = () => {
    return (
        <>
            <body>
                <div className="container">
                    <div className="top-bar">
                        <img src={logo} class="logo" alt="" />
                        <p>E-mail: vitor7goncalves@outlook.com</p>
                    </div>
                    <header>
                        <div className="img-wrapper">
                            <img src= {cape} alt="" />
                        </div>
                        <div className="banner">
                            <h1>Game developer and digital designer</h1>
                            <p>Vitor Gonçalves Rodrigues</p>
                        </div>
                    </header>
                    <div className="sessao-header-about-me">
                        <h1>About me</h1>
                    </div>
                    <div className="about-me-sessao">
                        <div className="about-me-filho">
                            <img src={me} alt="" className="me" />
                            <div className="conhecimento-text">
                                <p className="about-me-text">My name is Vitor Gonçalves Rodrigues, I was born in Rio de Janeiro on May 2, 1982, I
                                    live in Ribeirão Preto in the state of São Paulo.
                                    I'm a developer and game designer. A little over 2 years ago I decided to migrate to digital
                                    art. I worked in a startup that has an e-commerce project for 9 months. Today I work on game projects as a
                                    freelance,
                                    one of them is a game called Kami Kaido for a studio located in Porto - Portugal. Also I'm creating and
                                    selling assets on the
                                    Unity Assets Store. I am passionate about what I do, so much so that I consider it a hobby rather than a
                                    job..</p>
                            </div>
                        </div>
                        <section className="sessao-conhecimentos">
                            <div className="sessao-header">
                                <h1>Features</h1>
                            </div>
                            <div className="features-area">
                                <div className="conhecimentos">
                                    <div className="coluna1">
                                        <div className="conhecimento">
                                            <div className="conhecimento-header">
                                                <img src={csharp} alt="" className="icon-features" />
                                                <h3>C Sharp</h3>
                                            </div>
                                            <div className="conhecimento-text">
                                                <p>I've been developing with C Sharp for just over 1 year. However, the longest time was within Unity.
                                                    But I have small projects on GitHub where I used this tool. And of course, every day I learn more
                                                    because my studies with C Sharp don't stop.</p>
                                            </div>
                                        </div>
                                        <div className="conhecimento">
                                            <div className="conhecimento-header">
                                                <img src={photoshop} alt="" className="icon-features" />
                                                <h3>Adobe Photoshop</h3>
                                            </div>
                                            <div className="conhecimento-text">
                                                <p>Adobe photoshop is used to create digital art. The version I'm currently working on is 2019. All
                                                    the art I created in my projects was 97% through Photoshop. As I said about myself, I migrated about
                                                    2 years ago to digital art. Because I spent my whole life drawing and painting in a conventional
                                                    way.</p>
                                            </div>
                                        </div>
                                        <div className="conhecimento">
                                            <div className="conhecimento-header">
                                                <i className="fab fa-css3-alt"></i>
                                                <h3>CSS</h3>
                                            </div>
                                            <div className="conhecimento-text">
                                                <p>And to complete the front-end trio, I couldn't leave out the CSS. As well as Javascript and HTML,
                                                    I've been studying CSS since September 2020. And along with the other technologies, I created some
                                                    projects that are on my GitHub, and I also used them at Big2be.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="coluna2">
                                        <div className="conhecimento">
                                            <div className="conhecimento-header">
                                                <img src={unity} alt="" className="icon-features" />
                                                <h3>Unity</h3>
                                            </div>
                                            <div className="conhecimento-text">
                                                <p>The technology I use the most right now. With Unity I created and published my first game on Steam,
                                                    Magus Pocus. Unity is a development engine that uses the C Sharp programming language, more common
                                                    to
                                                    create 2D and 3D games, but, as far as I know there are professionals who work with this tool also
                                                    to
                                                    develop NFT's</p>
                                            </div>
                                        </div>
                                        <div className="conhecimento">
                                            <div className="conhecimento-header">
                                                <i className="fab fa-js"></i>
                                                <h3>Javascript</h3>
                                            </div>
                                            <div className="conhecimento-text">
                                                <p>I've been learning about Javascript since September 2020. Despite focusing more on C# and Unity, I
                                                    worked at a company located in Ribeirão Preto - SP called Big2be, using my knowledge and Javascript.
                                                    Company specialized in e-commerce for supermarkets, restaurants and the like.</p>
                                            </div>
                                        </div>
                                        <div className="conhecimento">
                                            <div className="conhecimento-header">
                                                <img src={html} alt="" className="icon-features" />
                                                <h3>HTML</h3>
                                            </div>
                                            <div className="conhecimento-text">
                                                <p>I've been studying and improving myself in HTML along with Javascript. And just like in JS, I used
                                                    HTML in my personal projects and in the company mentioned above.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="conhecimento-img-wrapper">
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sessao-projetos">
                            <div className="sessao-header-card">
                                <h1>Projets</h1>
                            </div>
                            <div className="section-project">
                                <div className="projets-video">
                                    <iframe className="video-sessao1" src="https://www.youtube.com/embed/2Op61l0WatY" title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                    <div className="project-text">
                                        <h3>Game I developed and sell on Steam</h3>
                                        <p>Magus Pocus is a 2D platform game. I created it a few months ago and it took 6 months for it to be
                                            completed. I developed it from scratch and all art and programming was done by me.</p>
                                        <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/" className="button-link">Know more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="section-project">
                                <div className="projets-video">
                                    <iframe className="video-sessao2" src="https://www.youtube.com/embed/QX8sv36jnLg" title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                    <div className="project-text">
                                        <h3>Paradise Beach Assets for Games</h3>
                                        <p>Paradise Beach are assets that contain some images for creating scenarios in games. Contains 3
                                            variations of stems and coconut tree tops for you to combine and create different types of coconut
                                            trees, bushes, beach background, rocks and ground.</p>
                                        <a href="https://assetstore.unity.com/publishers/78812?preview=1" className="button-link">Know more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="section-project">
                                <div className="projets-video">
                                    <iframe className="video-sessao3" src="https://www.youtube.com/embed/Bvrq5t6KX8s" title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                    <div className="project-text">
                                        <h3>Netflix Clone</h3>
                                        <p>I recreated the Netflix page on Jan 7th. 2021, to improve my knowledge in Javascript, HTML and CSS.
                                            Access my GitHub if you want the source code.</p>
                                        <a href="https://github.com/vitor7goncalves/Netflix-clone" className="button-link">Know more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="social-media">
                                <a href="https://www.facebook.com/sillenyus.vitor/"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://github.com/vitor7goncalves"><i className="fab fa-github-square"></i></a>
                                <a href="https://www.instagram.com/goncalvesvitor7/"><i className="fab fa-instagram-square"></i></a>
                                <a href="https://www.linkedin.com/in/vitor-gon%C3%A7alves-rodrigues-1aa9b4110/"><img style={{width: "1.8rem;"}}
                                    src="../assets/linkedin_icon_135436.png" alt="" /></a>
                            </div>
                        </section>
                        <footer className="session-footer">
                            <h3>
                                &copy; Vitor7Goncalves
                            </h3>
                        </footer>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Main