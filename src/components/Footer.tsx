import "../styles/footer.css";

function Footer () {
    return (
      <div className="footer">
        <p>...</p>
        <p>
          Zach Norman | {new Date().getFullYear()} |{" "}
          <a
            href="https://github.com/zachnorman02/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Repo
          </a>
        </p>
      </div>
    );
}

export default Footer;