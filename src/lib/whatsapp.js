/**
 * FitNest WhatsApp Ordering & Utilities
 * 
 * Edit WHATSAPP_NUMBER below to configure the business WhatsApp recipient.
 * Format: Country code without '+' + phone number (e.g., "8801700000000")
 */
export const WHATSAPP_NUMBER = "8801700000000";

/**
 * Validates a Bangladeshi mobile phone number.
 * Accepts formats:
 * - 01XXXXXXXXX (11 digits starting with 013-019)
 * - +8801XXXXXXXXX
 * - 8801XXXXXXXXX
 */
export function validateBangladeshiPhone(phone) {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s-]/g, "");
  const bdRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
  return bdRegex.test(cleaned);
}

/**
 * Formats order details into a clean, professional WhatsApp order text.
 */
export function buildWhatsAppOrderMessage({
  customerName,
  phone,
  address,
  productName,
  productCode,
  weight,
  quantity,
  unitPrice,
  totalPrice,
  specialInstructions
}) {
  const lines = [
    `🌿 *FITNEST — NEW ORDER REQUEST* 🌿`,
    `_Eat Healthy • Stay Fit_`,
    ``,
    `📋 *ORDER SUMMARY:*`,
    `• *Product:* ${productName}`,
    `• *Product Code:* ${productCode}`,
    `• *Selected Weight:* ${weight}`,
    `• *Quantity:* ${quantity}`,
    `• *Unit Price:* ৳${unitPrice}`,
    `• *Total Amount:* ৳${totalPrice}`,
    ``,
    `👤 *CUSTOMER INFORMATION:*`,
    `• *Name:* ${customerName}`,
    `• *Phone:* ${phone}`,
    `• *Delivery Address:* ${address}`,
    specialInstructions ? `• *Special Notes:* ${specialInstructions}` : null,
    ``,
    `📦 *Order Method:* Cash on Delivery / Direct WhatsApp Confirmation`,
    `🕒 *Sent via FitNest Online Order Portal*`,
    ``,
    `দয়া করে আমার এই অর্ডারটি কনফার্ম করুন। ধন্যবাদ!`
  ].filter(line => line !== null);

  return lines.join("\n");
}

/**
 * Generates the wa.me link with encoded text.
 */
export function getWhatsAppOrderUrl(orderData) {
  const message = buildWhatsAppOrderMessage(orderData);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Direct inquiry link for general chat
 */
export function getDirectWhatsAppChatUrl() {
  const defaultText = "হ্যালো FitNest! আমি আপনাদের স্বাস্থ্যকর খাদ্যপণ্য সম্পর্কে জানতে আগ্রহী।";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
}
