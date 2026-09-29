"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { serviceTypes } from "@/content/site";
import { Icon } from "@/components/icon";

export function QuoteForm() {
  const [previewMessage, setPreviewMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPreviewMessage("Demo only: this form is not connected. Nothing was sent or saved.");
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="form-step-label">ENQUIRY PREVIEW</span>
        <h3>Tell us what you need.</h3>
        <p>Required fields are marked. Details stay in this page and are never submitted.</p>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="quote-name">Name <span>(optional)</span></label>
          <input autoComplete="name" id="quote-name" maxLength={80} name="name" placeholder="Your name" />
        </div>
        <div className="form-field">
          <label htmlFor="quote-phone">Phone number <span aria-hidden="true">*</span></label>
          <input autoComplete="tel" id="quote-phone" inputMode="tel" maxLength={32} name="phone" placeholder="Your phone number" required type="tel" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="quote-service">Service type <span aria-hidden="true">*</span></label>
        <select defaultValue="" id="quote-service" name="service" required>
          <option disabled value="">Select a service</option>
          {serviceTypes.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="quote-message">A little more detail <span>(optional)</span></label>
        <textarea id="quote-message" maxLength={1000} name="message" placeholder="What would you like to ask about?" rows={4} />
      </div>
      <button className="button button-primary form-submit" type="submit">
        Preview demo response <Icon name="arrow" />
      </button>
      <p aria-live="polite" className={`form-status${previewMessage ? " is-visible" : ""}`} role="status">
        {previewMessage}
      </p>
    </form>
  );
}
