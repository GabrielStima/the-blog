import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import contactUsStyle from "./ContactUs.module.css";

export const ContactUs = () => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <main className={contactUsStyle.container}>
        <div className={contactUsStyle.subContainer}>
          <h1 className={contactUsStyle.title}>Get in Touch with Our Team</h1>
          <p className={contactUsStyle.description}>
            We love hearing from our readers and are here to help with any
            questions, feedback, or inquiries you may have.
          </p>
          <form onSubmit={submit}>
            <div className={contactUsStyle.formGroup}>
              <label htmlFor="">Full Name</label>
              <input placeholder="Your Name" type="text" />
            </div>
            <div className={contactUsStyle.formGroup}>
              <label htmlFor="">Email</label>
              <input placeholder="Enter your email" type="text" />
            </div>
            <div className={contactUsStyle.formGroup}>
              <label htmlFor="">Your Message</label>
              <textarea placeholder="Write here..." name="" id=""></textarea>
            </div>
            <button type="submit">
              Send Message
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4757 10.3318H3.83398V9.66509H13.4757H14.6812L13.8295 8.81185L9.53244 4.50707L10.0007 4.03886L15.9602 9.99842L10.0007 15.958L9.53244 15.4898L13.8295 11.185L14.6812 10.3318H13.4757Z"
                  fill="#0D0D0D"
                  stroke="white"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className={contactUsStyle.subContainer}>
          <h3>Contact Information</h3>
          <p className={contactUsStyle.description}>
            Integrating contact information into a CRM system communication.
          </p>
          <div className={contactUsStyle.contactInfo}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3989 8.29811L11.3674 7.83175H10.9H8.38333H7.84808L7.88449 8.36576C8.03747 10.6094 8.47949 12.769 9.17685 14.8101L9.43625 15.5693L10.0036 15.002L12.0036 13.002L12.2123 12.7932L12.1303 12.5095C11.7407 11.1622 11.4966 9.74763 11.3989 8.29811ZM27.4692 27.8839L27.1884 27.8046L26.9813 28.01L24.9813 29.9934L24.4025 30.5673L25.1764 30.8231C27.231 31.5023 29.3889 31.9443 31.6327 32.0973L32.1667 32.1337V31.5984V29.1151V28.648L31.7007 28.6162C30.2682 28.5186 28.8523 28.2744 27.4692 27.8839ZM27.1976 25.3626L27.2119 25.3684L27.2265 25.3732C29.1436 26.0065 31.2133 26.3484 33.3333 26.3484C33.9739 26.3484 34.5 26.8746 34.5 27.5151V33.3317C34.5 33.9723 33.9739 34.4984 33.3333 34.4984C17.9595 34.4984 5.5 22.0389 5.5 6.66508C5.5 6.02456 6.02614 5.49841 6.66667 5.49841H12.5C13.1405 5.49841 13.6667 6.02456 13.6667 6.66508C13.6667 8.80066 14.0082 10.8523 14.6407 12.7682C14.7691 13.1808 14.6748 13.6332 14.3464 13.9615L10.6798 17.6282L10.4231 17.8849L10.5877 18.2085C13.0361 23.0202 16.9795 26.946 21.7887 29.4101L22.1127 29.5761L22.3702 29.3186L26.032 25.6568C26.2747 25.4282 26.5676 25.3151 26.8667 25.3151C27.0067 25.3151 27.1167 25.3303 27.1976 25.3626Z"
                fill="#0D0D0D"
                stroke="#0D0D0D"
              />
            </svg>
            <p>+99 (99) 99999-9999</p>
          </div>
          <div className={contactUsStyle.contactInfo}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.5986 10.4227L35.0803 9.49841H33.334H6.66732H4.92096L6.4027 10.4227L19.736 18.7393L20.0007 18.9044L20.2653 18.7393L33.5986 10.4227ZM33.334 30.4984H33.834V29.9984V13.3317V12.4296L33.069 12.9077L20.0007 21.0755L6.93232 12.9077L6.16732 12.4296V13.3317V29.9984V30.4984H6.66732H33.334ZM33.334 7.16508C34.8912 7.16508 36.1673 8.44122 36.1673 9.99841V29.9984C36.1673 31.5556 34.8912 32.8317 33.334 32.8317H6.66732C5.11013 32.8317 3.83398 31.5556 3.83398 29.9984V9.99841C3.83398 8.44122 5.11013 7.16508 6.66732 7.16508H33.334Z"
                fill="#0D0D0D"
                stroke="#0D0D0D"
              />
            </svg>
            <p>suport124@gmail.com</p>
          </div>
          <div className={contactUsStyle.contactInfo}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6062 31.7724L19.9984 32.2757L20.3934 31.7746C22.17 29.5202 24.2705 26.5806 25.9294 23.5932C27.5777 20.6252 28.834 17.5339 28.834 14.9984C28.834 10.1223 24.8768 6.16507 20.0007 6.16507C15.1245 6.16507 11.1673 10.1223 11.1673 14.9984C11.1673 17.5103 12.4417 20.611 14.097 23.5873C15.7638 26.5842 17.8637 29.5356 19.6062 31.7724ZM20.0007 35.9083C19.9625 35.8643 19.9216 35.8171 19.8782 35.7666C19.5619 35.3996 19.1094 34.8646 18.566 34.195C17.4787 32.8553 16.0297 30.9794 14.5818 28.8333C13.1329 26.6859 11.6912 24.277 10.6132 21.8708C9.53229 19.458 8.83398 17.0847 8.83398 14.9984C8.83398 8.82455 13.8268 3.83174 20.0007 3.83174C26.1745 3.83174 31.1673 8.82455 31.1673 14.9984C31.1673 17.0847 30.469 19.458 29.3881 21.8708C28.3101 24.277 26.8684 26.6859 25.4195 28.8333C23.9716 30.9794 22.5226 32.8553 21.4353 34.195C20.8919 34.8646 20.4394 35.3996 20.1231 35.7666C20.0797 35.8171 20.0388 35.8643 20.0007 35.9083ZM23.6673 14.9984C23.6673 17.0235 22.0257 18.6651 20.0007 18.6651C17.9756 18.6651 16.334 17.0235 16.334 14.9984C16.334 12.9734 17.9756 11.3317 20.0007 11.3317C22.0257 11.3317 23.6673 12.9734 23.6673 14.9984Z"
                fill="#0D0D0D"
                stroke="#0D0D0D"
              />
            </svg>
            <p>New York, USA</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
