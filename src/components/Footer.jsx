import footerStyle from '../scss/footer.module.scss'



const Footer = () => {
  return (
    <footer>
      <h4 className={footerStyle['title']}>
        Copyright by Clarusway {new Date().getFullYear()}
      </h4>
    </footer>
  )
}

export default Footer;
