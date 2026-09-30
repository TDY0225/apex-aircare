"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { serviceTypes } from "@/content/site";
import { Icon } from "@/components/icon";
import { validateQuotePayload, type QuoteFieldErrors } from "@/lib/quote";

type FormState = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<QuoteFieldErrors>({});
  const startedAtRef = useRef<number | null>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      website: formData.get("website"),
      startedAt: startedAtRef.current ?? Date.now(),
    };
    const clientValidation = validateQuotePayload(payload);

    if (!clientValidation.ok) {
      setFormState("error");
      setMessage(clientValidation.message);
      setFieldErrors(clientValidation.fieldErrors);
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    setFormState("submitting");
    setMessage("Checking your details…");
    setFieldErrors({});

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { ok?: boolean; message?: string; fieldErrors?: QuoteFieldErrors };

      if (!response.ok || !result.ok) {
        setFormState("error");
        setMessage(result.message ?? "Please review the form and try again.");
        setFieldErrors(result.fieldErrors ?? {});
        requestAnimationFrame(() => errorSummaryRef.current?.focus());
        return;
      }

      setFormState("success");
      setMessage(result.message ?? "Demo only: your details were sent to this application for validation and were not retained or forwarded.");
    } catch {
      setFormState("error");
      setMessage("The demo could not reach its validation boundary. Please try again.");
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
    }
  }

  const describedBy = (field: keyof QuoteFieldErrors) => fieldErrors[field] ? `${field}-error` : undefined;

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="form-step-label">ENQUIRY PREVIEW</span>
        <h3>Tell us what you need.</h3>
        <p>Required fields are marked. Submitting sends these details to this application for validation; the demo does not retain or forward them.</p>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="quote-name">Name <span>(optional)</span></label>
          <input aria-describedby={describedBy("name")} aria-invalid={Boolean(fieldErrors.name)} autoComplete="name" id="quote-name" maxLength={80} name="name" placeholder="Your name" />
          {fieldErrors.name ? <span className="field-error" id="name-error">{fieldErrors.name}</span> : null}
        </div>
        <div className="form-field">
          <label htmlFor="quote-phone">Phone number <span aria-hidden="true">*</span></label>
          <input aria-describedby={describedBy("phone")} aria-invalid={Boolean(fieldErrors.phone)} autoComplete="tel" id="quote-phone" inputMode="tel" maxLength={32} name="phone" placeholder="Your phone number" required type="tel" />
          {fieldErrors.phone ? <span className="field-error" id="phone-error">{fieldErrors.phone}</span> : null}
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="quote-service">Service type <span aria-hidden="true">*</span></label>
        <select aria-describedby={describedBy("service")} aria-invalid={Boolean(fieldErrors.service)} defaultValue="" id="quote-service" name="service" required>
          <option disabled value="">Select a service</option>
          {serviceTypes.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
        {fieldErrors.service ? <span className="field-error" id="service-error">{fieldErrors.service}</span> : null}
      </div>
      <div className="form-field">
        <label htmlFor="quote-message">A little more detail <span>(optional)</span></label>
        <textarea aria-describedby={describedBy("message")} aria-invalid={Boolean(fieldErrors.message)} id="quote-message" maxLength={1000} name="message" placeholder="What would you like to ask about?" rows={4} />
        {fieldErrors.message ? <span className="field-error" id="message-error">{fieldErrors.message}</span> : null}
      </div>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="quote-website">Website</label>
        <input autoComplete="off" id="quote-website" name="website" tabIndex={-1} />
      </div>
      {formState === "error" && message ? (
        <div className="form-error-summary" id="quote-error-summary" ref={errorSummaryRef} role="alert" tabIndex={-1}>
          <strong>We could not complete the demo request.</strong>
          <span>{message}</span>
        </div>
      ) : null}
      <button className="button button-primary form-submit" disabled={formState === "submitting"} type="submit">
        {formState === "submitting" ? "Checking details…" : "Preview demo response"} <Icon name="arrow" />
      </button>
      <p aria-live="polite" className={`form-status${message && formState !== "error" ? " is-visible" : ""}`} role="status">
        {formState === "success" || formState === "submitting" ? message : ""}
      </p>
    </form>
  );
}
