import React from "react";

const Array = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Share a payment link</h1>
      <p className="mb-4">
        Share payment links across social media, emails, or your website.
      </p>
      <p className="mb-4">
        After you create a{" "}
        <a href="#" className="text-blue-600 hover:underline">
          payment link
        </a>
        , share it with your customers to accept payments without a digital
        storefront.
      </p>

      <h2 className="text-xl font-semibold mb-2">Share your link</h2>
      <p className="mb-4">
        Use the Dashboard to copy your payment link and share it online. Click
        the copy icon next to an existing link on the
        <a href="#" className="text-blue-600 hover:underline">
          Payment Links
        </a>{" "}
        page, or go to the payment link’s details page. You can share your
        payment link multiple times and anywhere online, including emails, text
        messages, and social media platforms.
      </p>

      <h2 className="text-xl font-semibold mb-2">Generate a QR code</h2>
      <p className="mb-4">
        You can create a QR code for a payment link in the Dashboard. Choose an
        existing link from the
        <a href="#" className="text-blue-600 hover:underline">
          Payment Links
        </a>{" "}
        page, or{" "}
        <a href="#" className="text-blue-600 hover:underline">
          create a new link
        </a>{" "}
        and then click QR code. Copy or download a PNG image of the QR code. The
        QR code doesn’t expire. If you deactivate the underlying payment link,
        the QR code redirects to an expiry page.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Embed a button on your site
      </h2>
      <p className="mb-4">
        Turn your payment link into an embeddable buy button to sell a product
        or subscription from your website. Select an existing link from the
        <a href="#" className="text-blue-600 hover:underline">
          Payment Links
        </a>{" "}
        page or create a new link and then click Buy button. Copy the code and
        paste it into your website. To learn more on how to embed and customise
        a button, see{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Create a buy button
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mb-2">Deactivate a link</h2>
      <p className="mb-4">
        You can use the Dashboard to deactivate a payment link. Click the
        overflow menu (...) to the right of the desired payment link, and then
        Deactivate. After you deactivate a link, customers are no longer able to
        make a purchase using it. You can choose to reactivate the payment link
        at any time. You can also use the{" "}
        <a href="#" className="text-blue-600 hover:underline">
          API
        </a>{" "}
        to deactivate a payment link.
      </p>
    </div>
  );
};

export default Array;
