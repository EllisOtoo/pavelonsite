import { BoldSection as BAASSection } from "../../components";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import ModernChart from "../../assets/BAAS/modernFin.png";
import shield from "../../assets/BAAS/shield.png";
import phoneImage from "../../assets/BAAS/phone.png";
import dashboard from "../../assets/BAAS/dashboard.png";
import { Link } from "@mui/material";
import FooterSection from "../../components/FooterSection/FooterSection";

const BAAS_Section_Defaults = {
  altColor: "#f7fafe",
  singleImage: true,
  image: null,
  showButton: true,
  buttonTitle: ["Talk to our Experts", "Explore our Platform"],
  description:
    "Modern  financial products require a modern BaaS platform, Our Banking as a Service (BaaS) platform is designed from the ground up to be the effective engine that fuels any financial products or services you can imagine. It is adaptable, simple to connect to, and infinitely scalable.",
  mainCaption: "Banking as a Service -  We support the full account lifecycle",
};

const BAAS = () => {
  return (
    <>
      <ResponsiveNav makeMenuDark />
      <BAASSection
        altColor={"#f7fafe"}
        singleImage={true}
        image={ModernChart}
        showButton
        buttonTitle={["Talk to our Experts", "Explore our Platform"]}
        description={
          "Modern  financial products require a modern BaaS platform, Our Banking as a Service (BaaS) platform is designed from the ground up to be the effective engine that fuels any financial products or services you can imagine. It is adaptable, simple to connect to, and infinitely scalable."
        }
        mainCaption={
          "Banking as a Service -  We support the full account lifecycle"
        }
      />
      <div>
        <p className="text-center text-4xl font-light my-12">
          Why build with Pavelon’s Baas Platform
        </p>
        <div className="flex  flex-col items-center md:items-start md:flex-row  gap-12 py-12 justify-center">
          <FeatureSet
            features={[
              {
                faClass: "fa fa-money",
                featureName: "Decoupled ledger = more use cases",
                subText:
                  "Our ledger can accommodate custom account structures, flows, and relationships - whatever you require, now and in the future ",
                link: "Learn more about Pavelon ledger",
              },
              {
                faClass: "fa fa-money",
                featureName: "Fast and easy  integration ",
                subText:
                  "Our ledger can accommodate custom account structures, flows, and relationships - whatever you require, now and in the future ",
                link: "Banking, payment and lending products",
              },
              {
                faClass: "fa fa-money",
                featureName: "Partner with multiple banks ",
                subText:
                  "Our ledger can accommodate custom account structures, flows, and relationships - whatever you require, now and in the future ",
                link: "Learn more",
              },
              {
                faClass: "fa fa-money",
                featureName: "Simple pricing and contracting",
                subText:
                  "Our ledger can accommodate custom account structures, flows, and relationships - whatever you require, now and in the future ",
                link: "Learn more",
              },
            ]}
          />
        </div>
      </div>
      <BAASSection
        {...{
          ...BAAS_Section_Defaults,
          description: null,
          showButton: false,
          mainCaption: "Pavelon Starter Apps",
          image: phoneImage,
          imageWidth: 300,
        }}
      >
        <ul className="list-disc ml-4">
          <li>
            Build beautiful, user-friendly mobile banking experiences quickly
          </li>
          <li>
            Create end-to-end mobile banking experiences for your clients using
            our white label app codebase.
          </li>
          <li>
            Full-featured and compatible with the Pavelon platform right out of
            the box
          </li>
          <li>
            Pavelon can assist with customizations, integrations, and other
            features.{" "}
          </li>
          <li>
            or customers with a Paveon contract, a free perpetual licence{" "}
          </li>
        </ul>
      </BAASSection>
      <BAASSection
        {...{
          ...BAAS_Section_Defaults,
          description: "Easy, seamless workflow management",
          showButton: false,
          mainCaption: "Pavelon Cases",
          image: dashboard,
        }}
      >
        <ul className="list-disc ml-4">
          <li>
            A complete case management system streamlines administration,
            marketing, and disclosures while reducing risk.{" "}
          </li>
          <li>
            Enables simple communication between your bank partner and Pavelon
          </li>
          <li>
            Notifications, automated processes, assignable tasks, and views and
            permissions that are particular to roles minimising physical labour
            and human error
          </li>
          <li>A full history is saved for each case, making audits easier</li>
        </ul>
      </BAASSection>

      <div className="flex flex-wrap justify-center my-32 ">
        <div className="flex w-8/12 gap-8 ">
          <div className="flex h-12 gap-4">
            <img src={shield} />
            <p className="text-3xl font-black ">A Secure BAAS platform</p>
          </div>

          <p className="w-6/12">
            Data security and integrity are extremely important to our clients,
            and Pavelon is aware of this. SOC 2, Type II attestation and PCI-DSS
            certification, both obtained in Q4 2021, are among the independent
            audits that reputable outside partners have conducted on Pavelon.
            Pavelon is still committed to these areas of independent validations
            and continues to invest in certifications, attestations, and
            validations.
          </p>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

function FeatureSet({ features }) {
  return (
    <>
      {features.map((perFeature) => (
        <div className="flex flex-col w-64 gap-2">
          <i className={`${perFeature.faClass} fa-2x`} aria-hidden="true"></i>
          <p className="text-3xl font-bold">{perFeature.featureName}</p>
          <p className="text-base"> {perFeature.subText}</p>

          <div>
            <Link to={"/"}> {perFeature.link} </Link>
            <i
              style={{ color: "#467ecf" }}
              className={`fa fa-chevron-right `}
              aria-hidden="true"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
}
export default BAAS;
