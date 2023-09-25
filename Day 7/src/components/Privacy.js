import React from 'react';
import "..//css/Privacy.css";
import TopBar from './TopBar';
import Footer from './Footer.js';

const Privacy = () => {
  return (
    <>
      <TopBar />
      <main className="wrap">
        <section className="containert">
          <div className="container__heading">
            <h2>Project Management System Privacy Policy</h2>
          </div>
          <div className="container__content">
            <div>
              <div>
                <strong>Effective Date:</strong> [Insert Effective Date]
              </div>

              <h3>1. Introduction</h3>
              <div className='text'>
                Welcome to [Your Project Management System Name] ("we," "us," "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you use our project management services.
              </div>

              <h3>2. Information We Collect</h3>
              <h4>2.1 Information You Provide</h4>
              <div className='text'>
                When you create an account, we may collect your name, email address, phone number, and organization details.<br />
                When you use our project management tools, we collect information related to your projects, tasks, and communications within the system.<br />
                If you contact our customer support, we may collect information related to your inquiries and interactions with our support team.
              </div>

              <h4>2.2 Automatically Collected Information</h4>
              <div className='text'>
                We may collect certain information automatically when you use our project management system, including your IP address, device information, browser type, and operating system.<br />
                We may use cookies and similar tracking technologies to collect data about your usage patterns within our system.
              </div>

              <h3>3. How We Use Your Information</h3>
              <div className='text'>
                We use the information we collect for the following purposes:<br />
                To provide you with project management tools and services.<br />
                To facilitate collaboration and communication within your organization.<br />
                To personalize and improve our services.<br />
                To analyze and monitor the usage of our project management system.<br />
                To send you important updates and notifications related to your projects (with your consent where required).
              </div>

              <h3>4. Disclosure of Your Information</h3>
              <div className='text'>
                We may disclose your personal information to:<br />
                Members of your organization who have access to your projects and tasks.<br />
                Legal authorities when required by law or to protect our rights, privacy, safety, or property.<br />
                Business partners and affiliates in connection with project management services (with your consent where required).
              </div>

              <h3>5. Security</h3>
              <div className='text'>
                We take reasonable steps to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is entirely secure, and we cannot guarantee the security of your data.
              </div>

              <h3>6. Your Choices</h3>
              <div className='text'>
                You have the right to:<br />
                Access and update your personal information.<br />
                Opt-out of receiving non-essential communications.<br />
                Delete your account and personal information.
              </div>

              <h3>7. Changes to this Privacy Policy</h3>
              <div className='text'>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be communicated through our project management system, and the revised policy will be effective immediately.
              </div>

              <h3>8. Contact Us</h3>
              <div className='text'>
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at [Insert Contact Information].
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
