import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/JAIRQUIROS">
                <img src="/img/facebook.png" alt= "Facebook"/>
            </a>
            <a href="https://www.linkedin.com/in/jair-quiros/">
                <img src="/img/linkedin.png" alt= "Linkedin"/>
            </a>
        </div>
        <img src="/img/logo.png" alt="org"/>
        <strong>Desarollado por Jair Quiros</strong>
    </footer>
}

export default Footer