export const QUOTE_MIN_SUBMISSION_MS = 800;

/** @param {number} startedAt @param {number} now @returns {boolean} */
export function isQuoteSubmissionTimeValid(startedAt, now) {
  return Number.isFinite(startedAt) && now - startedAt >= QUOTE_MIN_SUBMISSION_MS;
}
