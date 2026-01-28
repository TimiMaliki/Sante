import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-red-700 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 text-white">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p className="text-white">© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Links</h4>
          <a href=""><p className="my-5">Massa orci senectus</p></a>
          <a href=""><p className="my-5">Et gravida id et etiam</p></a>
          <a href=""><p>Ullamcorper vivamus</p></a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;