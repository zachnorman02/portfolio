import "../styles/home.css";

function Home() {
  return (
    <div className="content">
      <div id="intro">
        <div>
          <h1 className="scrolling-text">Zach Norman</h1>
        </div>
      </div>
      <p>
        Hi, I'm Zach. I graduated in April 2023 with my Bachelor's in
        Computer Science and Math from Northeastern University, and am currently working on my 
        Master's in Applied Statistics and Data Science at Villanova University. I am also working
        as an Application Engineer at Vanguard. I am interested in software development, data 
        science, and web development.
        Through previous projects and work experience, I have lots of
        development experience across a wide range of languages and
        technologies. You can learn more about me throughout my site.
      </p>
      <p>
        This site is a work-in-progress in terms of aesthetics, however the vast
        majority of the site is complete, with the exception of this home page,
        where I want to add more information later. You can find the GitHub for this site in the footer, where you'll find that this website was made using React.
      </p>
      <p>
        If you would like to contact me, email me at zachnorman02 [at] gmail
        [dot] com.
      </p>
    </div>
  );
}

export default Home;
