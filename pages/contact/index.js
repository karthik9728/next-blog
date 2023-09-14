import ContactForm from '@/components/contact/contact-from';
import { Fragment } from 'react';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="send me your message" />
      </Head>
      <ContactForm />;
    </Fragment>
  );
};

export default ContactPage;
