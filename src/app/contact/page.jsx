import Image from "next/image";
import styles from "./contact.module.css";


export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Addres" />
          <input type="text" placeholder="Phne Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="38"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
