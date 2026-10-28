const BRAND_GREEN = '#20342b'
const BRAND_GOLD = '#dcae2f'
const BRAND_CREAM = '#f3f0e8'
const BRAND_MUTED = '#68736b'
const SITE_URL = 'https://sinzasafaris.com'

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character)
}

function layout(content: string, preheader: string) {
  return `<!doctype html><html lang="en"><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Sinza Safaris</title></head><body style="margin:0;background:#ebe8df;color:${BRAND_GREEN};font-family:Arial,Helvetica,sans-serif"><span style="display:none!important;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</span><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#ebe8df"><tr><td align="center" style="padding:28px 12px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#ffffff"><tr><td style="padding:28px 32px;background:${BRAND_GREEN};text-align:center"><a href="${SITE_URL}" style="text-decoration:none"><img src="${SITE_URL}/images/sinza-safaris-logo.png" width="176" alt="Sinza Safaris" style="display:inline-block;width:176px;height:auto;border:0"></a></td></tr>${content}<tr><td style="padding:28px 32px;background:${BRAND_CREAM};color:${BRAND_MUTED};font-size:12px;line-height:1.7;text-align:center"><strong style="color:${BRAND_GREEN}">Sinza Safaris</strong><br>Meaningful journeys through East Africa.<br><a href="mailto:support@sinzasafaries.com" style="color:${BRAND_GREEN}">support@sinzasafaries.com</a> &nbsp;·&nbsp; <a href="tel:+256702970065" style="color:${BRAND_GREEN}">+256 702 970065</a><br><a href="${SITE_URL}" style="color:${BRAND_GREEN}">${SITE_URL.replace('https://', '')}</a></td></tr></table></td></tr></table></body></html>`
}

export function clientEnquiryEmail({ name, email, message, safari }: { name: string; email: string; message: string; safari?: string }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')
  const safeSafari = safari ? escapeHtml(safari) : 'General safari enquiry'
  return layout(`<tr><td style="padding:40px 32px 20px"><p style="margin:0 0 12px;color:${BRAND_GOLD};font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">New enquiry</p><h1 style="margin:0;color:${BRAND_GREEN};font-family:Georgia,'Times New Roman',serif;font-size:36px;font-weight:normal;line-height:1.1">A new safari conversation</h1></td></tr><tr><td style="padding:0 32px 40px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:15px;line-height:1.7"><tr><td style="padding:12px 0;border-bottom:1px solid #e1ded4;width:30%;color:${BRAND_MUTED}">Name</td><td style="padding:12px 0;border-bottom:1px solid #e1ded4"><strong>${safeName}</strong></td></tr><tr><td style="padding:12px 0;border-bottom:1px solid #e1ded4;color:${BRAND_MUTED}">Email</td><td style="padding:12px 0;border-bottom:1px solid #e1ded4"><a href="mailto:${safeEmail}" style="color:${BRAND_GREEN}">${safeEmail}</a></td></tr><tr><td style="padding:12px 0;border-bottom:1px solid #e1ded4;color:${BRAND_MUTED}">Interest</td><td style="padding:12px 0;border-bottom:1px solid #e1ded4">${safeSafari}</td></tr></table><div style="margin-top:28px;padding:22px;background:${BRAND_CREAM};font-size:15px;line-height:1.75">${safeMessage}</div></td></tr>`, `New enquiry from ${name}`)
}

export function enquiryConfirmationEmail({ name, message }: { name: string; message: string }) {
  const safeName = escapeHtml(name)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')
  return layout(`<tr><td style="padding:40px 32px 20px"><p style="margin:0 0 12px;color:${BRAND_GOLD};font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Thank you</p><h1 style="margin:0;color:${BRAND_GREEN};font-family:Georgia,'Times New Roman',serif;font-size:36px;font-weight:normal;line-height:1.1">Your journey starts here</h1></td></tr><tr><td style="padding:0 32px 40px;font-size:16px;line-height:1.75"><p>Dear ${safeName},</p><p>Thank you for reaching out to Sinza Safaris. Our Uganda-based team has received your message and will be in touch to shape thoughtful ideas around you.</p><div style="margin:28px 0;padding:22px;background:${BRAND_CREAM};font-size:15px">${safeMessage}</div><p style="margin-bottom:0">Warmly,<br><strong>The Sinza Safaris team</strong></p></td></tr>`, `Thank you for contacting Sinza Safaris, ${name}`)
}
