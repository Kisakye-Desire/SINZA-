const BRAND_GREEN = '#174f45'
const BRAND_GOLD = '#d4a72c'
const BRAND_CREAM = '#f3f0e8'
const BRAND_MUTED = '#68736b'
const SITE_URL = 'https://www.sinzasafaries.com'
export const SUPPORT_EMAIL = 'support@sinzasafaries.com'
export const SUPPORT_DOMAIN = SUPPORT_EMAIL.split('@')[1]
export const EXPECTED_RESEND_DOMAIN = `send.${SUPPORT_DOMAIN}`

const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export type SafariEnquiryEmailData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  where: string[]
  interests: string[]
  year: string
  month: string
  length: string
  who: string
  budget: string
  origin: string
  residence: string
  role: string
  source: string
  notes: string
}

type EmailContent = { html: string; text: string }

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => HTML_ENTITIES[character] ?? character)
}

function emailLayout(content: string, preheader: string) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Sinza Safaris</title>
</head>
<body style="margin:0;padding:0;background:#ece9e0;color:${BRAND_GREEN};font-family:Arial,Helvetica,sans-serif">
  <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;max-height:0;max-width:0;overflow:hidden">${escapeHtml(preheader)}</span>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ece9e0" style="width:100%;background:#ece9e0">
    <tr>
      <td align="center" style="padding:30px 12px">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="width:100%;max-width:640px;background:#ffffff">
          <tr>
            <td align="center" bgcolor="${BRAND_CREAM}" style="padding:26px 24px 22px;background:${BRAND_CREAM}">
              <img src="${SITE_URL}/images/sinza-safaris-logo.png" width="148" alt="Sinza Safaris" style="display:block;width:148px;max-width:100%;height:auto;border:0;margin:0 auto">
              <p style="margin:12px 0 0;color:${BRAND_GREEN};font-size:10px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Meaningful journeys through East Africa</p>
            </td>
          </tr>
          <tr><td height="4" bgcolor="${BRAND_GOLD}" style="height:4px;background:${BRAND_GOLD};font-size:0;line-height:0">&nbsp;</td></tr>
          ${content}
          <tr>
            <td align="center" bgcolor="${BRAND_GREEN}" style="padding:25px 24px;background:${BRAND_GREEN};color:#f3f0e8;font-size:12px;line-height:1.8">
              <strong style="color:#ffffff;font-size:14px">Sinza Safaris</strong><br>
              Uganda-based journeys, made personal.<br>
              <a href="mailto:${SUPPORT_EMAIL}" style="color:#f3f0e8;text-decoration:underline">${SUPPORT_EMAIL}</a>
              &nbsp;&middot;&nbsp;
              <a href="tel:+256702970065" style="color:#f3f0e8;text-decoration:underline">+256 702 970065</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function detailRow(label: string, value: string) {
  return `<tr>
    <td valign="top" style="width:34%;padding:12px 14px 12px 0;border-bottom:1px solid #e7e4dc;color:${BRAND_MUTED};font-size:13px;line-height:1.6">${escapeHtml(label)}</td>
    <td valign="top" style="padding:12px 0;border-bottom:1px solid #e7e4dc;color:${BRAND_GREEN};font-size:14px;line-height:1.6">${escapeHtml(value || 'Not provided')}</td>
  </tr>`
}

function fullName(data: SafariEnquiryEmailData) {
  return `${data.firstName} ${data.lastName}`.trim()
}

export function clientEnquiryEmail(data: SafariEnquiryEmailData): EmailContent {
  const name = fullName(data)
  const rows: Array<[string, string]> = [
    ['Name', name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Destination', data.where.join(', ')],
    ['Interests', data.interests.join(', ')],
    ['Travel window', `${data.month} ${data.year}`],
    ['Trip length', data.length],
    ['Travellers', data.who],
    ['Budget', data.budget],
    ['Current location', data.origin],
    ['Country of residence', data.residence],
    ['Role', data.role],
    ['How they found us', data.source],
  ]
  const safeNotes = data.notes ? escapeHtml(data.notes).replace(/\r?\n/g, '<br>') : '<em>No extra notes were provided.</em>'
  const replyHref = `mailto:${data.email}?subject=${encodeURIComponent(`Re: Safari enquiry from ${name}`)}`
  const html = emailLayout(
    `<tr>
      <td style="padding:38px 32px 18px">
        <p style="margin:0 0 10px;color:#9b7421;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">A new safari enquiry</p>
        <h1 style="margin:0;color:${BRAND_GREEN};font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:normal;line-height:1.15">A new journey is taking shape.</h1>
        <p style="margin:14px 0 0;color:${BRAND_MUTED};font-size:14px;line-height:1.7">A guest has shared the details below. A personal reply within 24 hours will keep the conversation moving.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 36px">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${rows.map(([label, value]) => detailRow(label, value)).join('')}</table>
        <div style="margin-top:22px;padding:20px 22px;background:${BRAND_CREAM};border-left:3px solid ${BRAND_GOLD}">
          <p style="margin:0 0 8px;color:#9b7421;font-size:10px;font-weight:bold;letter-spacing:1.8px;text-transform:uppercase">A note from the traveller</p>
          <p style="margin:0;color:${BRAND_GREEN};font-size:14px;line-height:1.8">${safeNotes}</p>
        </div>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:25px">
          <tr><td bgcolor="${BRAND_GREEN}" style="background:${BRAND_GREEN}"><a href="${escapeHtml(replyHref)}" style="display:inline-block;padding:13px 20px;color:#ffffff;font-size:13px;font-weight:bold;text-decoration:none">Reply to ${escapeHtml(data.firstName)}</a></td></tr>
        </table>
      </td>
    </tr>`,
    `New safari enquiry from ${name}`,
  )
  const text = [
    `New safari enquiry from ${name}`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value || 'Not provided'}`),
    '',
    'A note from the traveller:',
    data.notes || 'No extra notes were provided.',
    '',
    `Reply to ${data.email}`,
  ].join('\n')

  return { html, text }
}

export type GeneralInquiryEmailData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function generalInquiryEmail(data: GeneralInquiryEmailData): EmailContent {
  const safeName = escapeHtml(data.name)
  const safeMessage = escapeHtml(data.message).replace(/\\r?\\n/g, '<br>')
  const html = emailLayout(
    `<tr>
      <td style="padding:38px 32px 18px">
        <p style="margin:0 0 10px;color:#9b7421;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">General enquiry</p>
        <h1 style="margin:0;color:${BRAND_GREEN};font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:normal;line-height:1.15">A new conversation has arrived.</h1>
        <p style="margin:14px 0 0;color:${BRAND_MUTED};font-size:14px;line-height:1.7">A visitor has contacted Sinza Safaris through the general enquiry channel.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 36px;color:${BRAND_GREEN};font-size:14px;line-height:1.8">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          ${detailRow('Name', data.name)}
          ${detailRow('Email', data.email)}
          ${detailRow('Phone', data.phone)}
          ${detailRow('Subject', data.subject)}
        </table>
        <div style="margin-top:22px;padding:20px 22px;background:${BRAND_CREAM};border-left:3px solid ${BRAND_GOLD}">
          <p style="margin:0 0 8px;color:#9b7421;font-size:10px;font-weight:bold;letter-spacing:1.8px;text-transform:uppercase">Message</p>
          <p style="margin:0;color:${BRAND_GREEN};font-size:14px;line-height:1.8">${safeMessage}</p>
        </div>
      </td>
    </tr>`,
    `General enquiry from ${data.name}`,
  )
  const text = [`General enquiry from ${data.name}`, '', `Name: ${data.name}`, `Email: ${data.email}`, `Phone: ${data.phone || 'Not provided'}`, `Subject: ${data.subject || 'General enquiry'}`, '', data.message].join('\\n')
  return { html, text }
}

export function enquiryConfirmationEmail(data: SafariEnquiryEmailData) {
  const name = fullName(data)
  const summaryRows: Array<[string, string]> = [
    ['Destination', data.where.join(', ')],
    ['Travel window', `${data.month} ${data.year}`],
    ['Interests', data.interests.join(', ')],
    ['Trip length', data.length],
    ['Travellers', data.who],
  ]
  const safeFirstName = escapeHtml(data.firstName)
  const replySubject = encodeURIComponent('Re: Your Sinza Safaris enquiry')
  const html = emailLayout(
    `<tr>
      <td style="padding:40px 32px 12px">
        <p style="margin:0 0 10px;color:#9b7421;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Thank you for reaching out</p>
        <h1 style="margin:0;color:${BRAND_GREEN};font-family:Georgia,'Times New Roman',serif;font-size:34px;font-weight:normal;line-height:1.15">Your journey starts here.</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 38px;color:${BRAND_GREEN};font-size:15px;line-height:1.8">
        <p style="margin:0 0 16px">Hello ${safeFirstName},</p>
        <p style="margin:0 0 22px">Your safari enquiry has reached our Uganda-based team. We will review your ideas and reply personally within 24 hours.</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="${BRAND_CREAM}" style="width:100%;padding:8px 18px;background:${BRAND_CREAM}">
          ${summaryRows.map(([label, value]) => detailRow(label, value)).join('')}
        </table>
        <p style="margin:22px 0 18px;color:${BRAND_MUTED};font-size:13px">You can reply directly to this email and your message will reach our team.</p>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
          <tr><td bgcolor="${BRAND_GREEN}" style="background:${BRAND_GREEN}"><a href="mailto:${SUPPORT_EMAIL}?subject=${replySubject}" style="display:inline-block;padding:14px 22px;color:#ffffff;font-size:13px;font-weight:bold;text-decoration:none">Reply to our team</a></td></tr>
        </table>
        <p style="margin:25px 0 0">Warmly,<br><strong>The Sinza Safaris team</strong></p>
      </td>
    </tr>`,
    `Thanks ${name}, your safari enquiry is with our team.`,
  )
  const text = [
    `Hello ${data.firstName},`,
    '',
    'Your safari enquiry has reached our Uganda-based team. We will review your ideas and reply personally within 24 hours.',
    '',
    ...summaryRows.map(([label, value]) => `${label}: ${value || 'Not provided'}`),
    '',
    `You can reply directly to this email, or write to ${SUPPORT_EMAIL}.`,
    '',
    'Warmly,',
    'The Sinza Safaris team',
  ].join('\n')

  return { html, text }
}
