import React, { useState } from 'react';
import './App.css';

function App() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="App">
      {/* Custom App Bar matching Flutter's NeuAppBar */}
      <div className="neu-app-bar">
        <div className="app-bar-content">
          <h1 className="app-title">Privacy Policy</h1>
        </div>
      </div>

      <div className="container">
        {/* Hero Section with Neubrutalism Card */}
        <div className="hero-card neu-card">
          <div className="hero-content">
            <h1 className="hero-title">Privacy Policy for Split-It</h1>
            <p className="last-updated">Last Updated: October 3, 2025</p>
            <div className="hero-decoration"></div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="policy-section neu-card">
          <div className="section-header" onClick={() => toggleSection('intro')}>
            <div className="section-icon-wrapper neu-icon-card blue-bg">
              <span className="section-icon">📋</span>
            </div>
            <h2>1. Introduction</h2>
          </div>
          <div className="section-content">
            <p>Welcome to Split-It ("we," "our," "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "Application"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.</p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card green-bg">
              <span className="section-icon">🔍</span>
            </div>
            <h2>2. Information We Collect</h2>
          </div>
          <div className="section-content">
            <p>We collect information about you in various ways to provide and improve our Service. The information we collect includes:</p>
            
            <div className="subsection">
              <h3>A. Information You Provide to Us</h3>
              <ul className="neu-list">
                <li className="neu-list-item">
                  <strong>Account Information:</strong> When you register using Google Sign-In, we collect personal information from your Google account, including your full name, email address, and Google profile picture URL.
                </li>
                <li className="neu-list-item">
                  <strong>User-Generated Content:</strong> We collect the data you create within the Application, such as group names, descriptions, and thumbnails; expense details, amounts, tags, and associated images/receipts you upload; and any comments you post on expenses.
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h3>B. Information Collected Automatically</h3>
              <ul className="neu-list">
                <li className="neu-list-item">
                  <strong>Device and Usage Information:</strong> We may collect device-specific information when you access the Application, such as your device model, operating system, unique device identifiers, and mobile network information.
                </li>
                <li className="neu-list-item">
                  <strong>Firebase Installation and App Check:</strong> Firebase automatically generates installation IDs to manage services like Push Notifications. We also use Firebase App Check to verify requests.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card purple-bg">
              <span className="section-icon">⚙️</span>
            </div>
            <h2>3. How We Use Your Information</h2>
          </div>
          <div className="section-content">
            <p>We use the information we collect for various purposes, including to:</p>
            <ul className="neu-list">
              <li className="neu-list-item">
                <strong>Provide and Maintain the Service:</strong> To create your account, manage groups, process expenses, calculate debts, and facilitate settlements between users.
              </li>
              <li className="neu-list-item">
                <strong>Improve and Personalize the Service:</strong> To understand how users interact with our app, analyze usage patterns, and enhance user experience.
              </li>
              <li className="neu-list-item">
                <strong>Enable Communication:</strong> To send you push notifications related to group activities (e.g., new expenses, comments). You can manage these in your device settings.
              </li>
              <li className="neu-list-item">
                <strong>Ensure Security:</strong> To protect against fraud and abuse, verify the authenticity of app instances through Firebase App Check, and secure your account.
              </li>
              <li className="neu-list-item">
                <strong>Facilitate User Interaction:</strong> To display your name and profile picture to other members of groups you join, making identification easier.
              </li>
            </ul>
          </div>
        </section>

        {/* Sharing Information */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card orange-bg">
              <span className="section-icon">🔗</span>
            </div>
            <h2>4. Sharing of Your Information</h2>
          </div>
          <div className="section-content">
            <p>We do not sell your personal data. We may share your information in the following situations:</p>
            <ul className="neu-list">
              <li className="neu-list-item">
                <strong>With Other Users in Your Groups:</strong> Your name, profile picture, expense contributions, and splits are visible to all members of any group you are part of. This is a core function of the Application.
              </li>
              <li className="neu-list-item">
                <strong>With Third-Party Service Providers:</strong> We share data with third-party vendors who perform services for us:
                <div className="nested-services">
                  <div className="service-card neu-card-mini">
                    <strong>🔐 Google (Firebase):</strong> Authentication, database (Firestore), file storage, push notifications (FCM), and security (App Check). <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="neu-link">View Privacy Policy</a>
                  </div>
                  <div className="service-card neu-card-mini">
                    <strong>☁️ Cloudinary:</strong> Image hosting for profile, group, and expense images. <a href="https://cloudinary.com/privacy" target="_blank" rel="noopener noreferrer" className="neu-link">View Privacy Policy</a>
                  </div>
                </div>
              </li>
              <li className="neu-list-item">
                <strong>For Legal Reasons:</strong> We may disclose your information if required by law, to respond to legal processes, or to protect rights, property, or safety.
              </li>
            </ul>
          </div>
        </section>

        {/* Data Storage and Security */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card red-bg">
              <span className="section-icon">🔒</span>
            </div>
            <h2>5. Data Storage and Security</h2>
          </div>
          <div className="section-content">
            <p>Your data is stored on secure servers provided by Google Cloud Platform (via Firebase) and Cloudinary. We implement reasonable security measures to protect your information. However, no electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
            <p>For offline functionality, some data (like groups and expenses) may be cached on your device using Hive. This data is intended for temporary use and syncs with our servers when you are online.</p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card blue-bg">
              <span className="section-icon">⏱️</span>
            </div>
            <h2>6. Data Retention</h2>
          </div>
          <div className="section-content">
            <p>We retain your personal data as long as your account is active. If you delete your account, we will take steps to delete your personal information. Data within a group (like expenses and comments) is retained as long as the group exists, as it is essential for the functionality of other members in that group.</p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card green-bg">
              <span className="section-icon">✅</span>
            </div>
            <h2>7. Your Rights and Choices</h2>
          </div>
          <div className="section-content">
            <p>You have certain rights regarding your data:</p>
            <ul className="neu-list">
              <li className="neu-list-item">
                <strong>Access and Update:</strong> You can access and update your basic profile information (name and photo) through the Application.
              </li>
              <li className="neu-list-item">
                <strong>Data Deletion:</strong> You can delete your account by contacting us. Deleting your account will remove your personal data from our systems.
              </li>
              <li className="neu-list-item">
                <strong>Push Notifications:</strong> You can disable push notifications at any time through your device's settings.
              </li>
              <li className="neu-list-item">
                <strong>Image Removal:</strong> You have the option to remove your custom profile picture, group thumbnails, and expense images within the app.
              </li>
            </ul>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card purple-bg">
              <span className="section-icon">👶</span>
            </div>
            <h2>8. Children's Privacy</h2>
          </div>
          <div className="section-content">
            <p>Our Service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that a child has provided us with personal information, we will take steps to delete such information.</p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card orange-bg">
              <span className="section-icon">🔄</span>
            </div>
            <h2>9. Changes to This Privacy Policy</h2>
          </div>
          <div className="section-content">
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy within the Application and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically.</p>
          </div>
        </section>

        {/* Contact Us */}
        <section className="policy-section neu-card">
          <div className="section-header">
            <div className="section-icon-wrapper neu-icon-card blue-bg">
              <span className="section-icon">✉️</span>
            </div>
            <h2>10. Contact Us</h2>
          </div>
          <div className="section-content">
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <a href="mailto:support@split-it-app.com" className="contact-email neu-button">
              riddhesh.firake@gmail.com
            </a>
          </div>
        </section>

        

        {/* Footer */}
        <div className="footer">
          <p className="footer-text">Made in India with Love ❤️</p>
        </div>
      </div>
    </div>
  );
}

export default App;
