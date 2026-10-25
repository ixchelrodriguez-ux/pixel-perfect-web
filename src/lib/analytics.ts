export const trackConversion = (conversionId: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: conversionId,
    });
  }
};

export const trackWhatsAppLead = () => {
  trackConversion("AW-18445447810/vQimCLW266gdEILlvNtE");
};

export const trackFormLead = () => {
  trackConversion("AW-18445447810/vQimCLW266gdEILlvNtE");
};