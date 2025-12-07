"use client";

export default function PolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-xl text-muted-foreground">Last updated: August 1, 2024</p>
      </header>

      <div className="space-y-8 text-lg text-muted-foreground">
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-primary">1. Introduction</h2>
          <p>Welcome to Bookit. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-primary">2. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the platform includes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the platform or when you choose to participate in various activities related to the platform, such as online chat and message boards.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the platform, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the platform.</li>
            <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-primary">3. How We Use Your Information</h2>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the platform to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the platform.</li>
            <li>Generate a personal profile about you to make future visits to the platform more personalized.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-primary">4. Disclosure of Your Information</h2>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, if we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-primary">5. Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-primary">6. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-primary">7. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@bookit.com" className="text-primary hover:underline">privacy@bookit.com</a></p>
        </section>
      </div>
    </div>
  );
}