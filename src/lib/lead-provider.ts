import type { QuoteInput } from "@/lib/quote";

export type LeadProviderResult = { accepted: true };

export interface LeadProvider {
  submit(input: QuoteInput): Promise<LeadProviderResult>;
}

/**
 * Portfolio-safe provider. It deliberately does not persist, log, email,
 * forward or otherwise retain the submitted values.
 */
export class DemoLeadProvider implements LeadProvider {
  async submit(input: QuoteInput): Promise<LeadProviderResult> {
    void input;
    return { accepted: true };
  }
}

export function getLeadProvider(): LeadProvider {
  return new DemoLeadProvider();
}
