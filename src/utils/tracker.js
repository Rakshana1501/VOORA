/**
 * Centralized tracking utility for VOORA website.
 * Captures campaign URL parameters (srd, source, subsource, channel)
 * and stores them in sessionStorage/localStorage.
 * Attaches these fields to all lead submissions and logs them cleanly.
 */

// Initialize and capture parameters from URL
export function initTracker() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);

  // Parameter mappings to check
  const params = {
    srd: urlParams.get('srd'),
    source: urlParams.get('source') || urlParams.get('utm_source'),
    subsource: urlParams.get('subsource') || urlParams.get('utm_campaign'),
    channel: urlParams.get('channel') || urlParams.get('utm_medium')
  };

  // Store in sessionStorage if present in URL
  if (params.srd) sessionStorage.setItem('voora_srd', params.srd);
  if (params.source) sessionStorage.setItem('voora_source', params.source);
  if (params.subsource) sessionStorage.setItem('voora_subsource', params.subsource);
  if (params.channel) sessionStorage.setItem('voora_channel', params.channel);
}

// Retrieve captured parameters
export function getLeadTrackerParams() {
  if (typeof window === 'undefined') {
    return { srd: '', source: '', subsource: '', channel: '' };
  }

  return {
    srd: sessionStorage.getItem('voora_srd') || '',
    source: sessionStorage.getItem('voora_source') || 'website', // Default source to 'website'
    subsource: sessionStorage.getItem('voora_subsource') || 'Website Lead', // Default subsource
    channel: sessionStorage.getItem('voora_channel') || 'website' // Default channel
  };
}

// Save lead data locally and output to console
export function captureLead(formName, formData) {
  const trackerParams = getLeadTrackerParams();
  
  const lead = {
    id: 'lead_' + Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
    form: formName,
    ...formData,
    ...trackerParams
  };

  // Save to localStorage leads collection
  try {
    const existingLeads = JSON.parse(localStorage.getItem('voora_leads') || '[]');
    existingLeads.push(lead);
    localStorage.setItem('voora_leads', JSON.stringify(existingLeads));
  } catch (e) {
    console.error('Error saving lead to localStorage:', e);
  }

  // Visual Console Logging
  console.group('%c 📥 VOORA LEAD CAPTURED SUCCESSFULLY ', 'background: #6d28d9; color: #fff; font-size: 12px; font-weight: bold; padding: 4px; border-radius: 4px;');
  console.log('%cForm Name:%c ' + formName, 'font-weight: bold; color: #6d28d9;', 'color: inherit;');
  console.log('%cLead Data:%c', 'font-weight: bold; color: #6d28d9;', 'color: inherit;', formData);
  console.log('%cTracking Params:%c', 'font-weight: bold; color: #6d28d9;', 'color: inherit;', trackerParams);
  console.log('%cFull Lead Payload:%c', 'font-weight: bold; color: #10b981;', 'color: inherit;', lead);
  console.groupEnd();

  return lead;
}
