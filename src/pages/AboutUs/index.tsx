import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Tag } from "../../components/Tag";
import defaltImage from "../../assets/images/defaultImage.jpg";
import aboutUsStyle from "./AboutUs.module.css";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className={aboutUsStyle.container}>
        <h1 className={aboutUsStyle.header}>About Us</h1>
        <section className={aboutUsStyle.sectionOne}>
          <img
            src={defaltImage}
            alt=""
            className={aboutUsStyle.sectionOneImage}
          />
          <div>
            <div className={aboutUsStyle.sectionOneInfos}>
              <h2>The Faces and Stories Behind</h2>
              <p>
                Discover the inspiration behind our travel blog, where we share
                captivating stories and hidden gems from around the globe. Join
                us as we explore diverse cultures, breathtaking landscapes, and
                unforgettable experiences.
              </p>
              <button>Get Started</button>
            </div>
            <hr />
            <div className={aboutUsStyle.sectionOneAdvantages}>
              <div className={aboutUsStyle.sectionOneAdvantage}>
                <img src={defaltImage} alt="" />
                <div>
                  <Tag>Freedom</Tag>
                  <p>Digital Nomad: Living and Working Anywhere, Anytime</p>
                </div>
              </div>
              <div className={aboutUsStyle.sectionOneAdvantage}>
                <img src={defaltImage} alt="" />
                <div>
                  <Tag>Freedom</Tag>
                  <p>What’s Buzzing on the Blog: Latest Entries</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={aboutUsStyle.sectionTwo}></section>
        <section className={aboutUsStyle.sectionThree}>
          <div className={aboutUsStyle.sectionThreeContainer}>
            <h2>Our Vision and Mission: Creating Beauty with Purpose</h2>
            <div className={aboutUsStyle.sectionThreeContainerSub}>
              <p className={aboutUsStyle.sectionThreeContainerSubTitle}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.498413"
                    width="31"
                    height="31"
                    rx="3.5"
                    stroke="#0D0D0D"
                  />
                  <path
                    d="M16 11.4151C19.1583 11.4151 21.975 13.1901 23.35 15.9984C21.975 18.8067 19.1667 20.5817 16 20.5817C12.8333 20.5817 10.025 18.8067 8.65001 15.9984C10.025 13.1901 12.8417 11.4151 16 11.4151ZM16 9.74841C11.8333 9.74841 8.27501 12.3401 6.83334 15.9984C8.27501 19.6567 11.8333 22.2484 16 22.2484C20.1667 22.2484 23.725 19.6567 25.1667 15.9984C23.725 12.3401 20.1667 9.74841 16 9.74841ZM16 13.9151C17.15 13.9151 18.0833 14.8484 18.0833 15.9984C18.0833 17.1484 17.15 18.0817 16 18.0817C14.85 18.0817 13.9167 17.1484 13.9167 15.9984C13.9167 14.8484 14.85 13.9151 16 13.9151ZM16 12.2484C13.9333 12.2484 12.25 13.9317 12.25 15.9984C12.25 18.0651 13.9333 19.7484 16 19.7484C18.0667 19.7484 19.75 18.0651 19.75 15.9984C19.75 13.9317 18.0667 12.2484 16 12.2484Z"
                    fill="#0D0D0D"
                  />
                </svg>
                Vision
              </p>
              <p>
                Innovation is at the heart of our vision. We strive to be at the
                forefront of beauty trends and technology, consistently
                introducing new approaches, products.
              </p>
            </div>
            <div className={aboutUsStyle.sectionThreeContainerSub}>
              <p className={aboutUsStyle.sectionThreeContainerSubTitle}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.498413"
                    width="31"
                    height="31"
                    rx="3.5"
                    stroke="#0D0D0D"
                  />
                  <g clip-path="url(#clip0_2068_102)">
                    <path
                      d="M11.2083 23.4984H14.5417C14.5417 24.4151 13.7917 25.1651 12.875 25.1651C11.9583 25.1651 11.2083 24.4151 11.2083 23.4984ZM9.54167 22.6651H16.2083V20.9984H9.54167V22.6651ZM19.125 14.7484C19.125 17.9318 16.9083 19.6318 15.9833 20.1651H9.76667C8.84167 19.6318 6.625 17.9318 6.625 14.7484C6.625 11.2984 9.425 8.49842 12.875 8.49842C16.325 8.49842 19.125 11.2984 19.125 14.7484ZM17.4583 14.7484C17.4583 12.2234 15.4 10.1651 12.875 10.1651C10.35 10.1651 8.29167 12.2234 8.29167 14.7484C8.29167 16.8068 9.53333 17.9901 10.25 18.4984H15.5C16.2167 17.9901 17.4583 16.8068 17.4583 14.7484ZM23.1833 12.9734L22.0417 13.4984L23.1833 14.0234L23.7083 15.1651L24.2333 14.0234L25.375 13.4984L24.2333 12.9734L23.7083 11.8318L23.1833 12.9734ZM21.2083 11.8318L21.9917 10.1151L23.7083 9.33176L21.9917 8.54842L21.2083 6.83176L20.425 8.54842L18.7083 9.33176L20.425 10.1151L21.2083 11.8318Z"
                      fill="#0D0D0D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2068_102">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(6 5.99841)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Mission
              </p>
              <p>
                At the heart of our mission is our dedication to our clients. We
                are committed to providing exceptional services that cater to
                individual needs and preferences.
              </p>
            </div>
            <div className={aboutUsStyle.sectionThreeContainerSub}>
              <p className={aboutUsStyle.sectionThreeContainerSubTitle}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.498413"
                    width="31"
                    height="31"
                    rx="3.5"
                    stroke="#0D0D0D"
                  />
                  <path
                    d="M21.8333 8.49841H10.1667L7.66666 13.4984L16 23.4984L24.3333 13.4984L21.8333 8.49841ZM14.0167 12.6651L15.2667 10.1651H16.7333L17.9833 12.6651H14.0167ZM15.1667 14.3317V19.8984L10.5333 14.3317H15.1667ZM16.8333 14.3317H21.4667L16.8333 19.8984V14.3317ZM22.05 12.6651H19.8417L18.5917 10.1651H20.8L22.05 12.6651ZM11.2 10.1651H13.4083L12.1583 12.6651H9.94999L11.2 10.1651Z"
                    fill="#0D0D0D"
                  />
                </svg>
                Value
              </p>
              <p>
                They are the foundational principles upon which we have built
                our brand, and they shape our interactions with clients,
                colleagues, and the community.{" "}
              </p>
            </div>
          </div>
          <div
            className={`${aboutUsStyle.sectionThreeContainer} ${aboutUsStyle.image}`}
          >
            <img src={defaltImage} alt="" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
