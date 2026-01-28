import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-red-700 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 text-white">
            Built for those who refuse average. We combine expert training, premium
            equipment, and real accountability to help you unlock your full potential.
          </p>
          <p className="text-white">© Evogym {new Date().getFullYear()} , All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Other Links</h4>
          <a href="https://www.easygym.fr/salle-de-sport/paris/paris-palais-royal?utm_source=GMB&utm_medium=Local_Inventory&utm_campaign=paris-palais-royal&utm_term=GP_generique&utm_content=website">
            <p className="my-5">easyGym Paris Palais Royal</p>
          </a>

          <a href="https://libertygym.fr/salle-de-sport/paris-20e/">
            <p className="my-5">Liberty Gym Paris 20th</p>
          </a>

          <a href="https://www.keepcool.fr/s/salle-de-sport-paris-4-bastille/?utm_source=campaign-gmb">
            <p className="my-5">Keepcool Paris Bastille</p>
          </a>

        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Reach out to one of Paris’ well-known fitness clubs for bookings or
            inquiries.
          </p>
          <p className="text-md text-white">
            📍 21 Rue de la Banque, 75002 Paris, France<br />
            ☎️ +33 1 88 61 07 26<br />
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;