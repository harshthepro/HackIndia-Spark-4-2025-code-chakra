import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = ["support@FundChainX.com", "harsh@gmail.com", "Contact us"];
  const usefulLinks = ["Home", "About Us", "Company Bio"];

  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            DecentraFund
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Products Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p className="mb-4" key={i}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>

          {/* Useful Links Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful Links
            </h6>
            {usefulLinks.map((el, i) => (
              <p className="mb-4" key={i}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>

          {/* Contact Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className="mb-4" key={i}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="backgroundMain p-6 text-center">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tailwind-elements.com/">
        DecentraFund
        </a>
      </div>
    </footer>
  );
};

export default Footer;
