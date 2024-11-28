const zodiacEmojis: { [key: string]: string } = {
  'Koç': '♈️',
  'Boğa': '♉️',
  'İkizler': '♊️',
  'Yengeç': '♋️',
  'Aslan': '♌️',
  'Başak': '♍️',
  'Terazi': '♎️',
  'Akrep': '♏️',
  'Yay': '♐️',
  'Oğlak': '♑️',
  'Kova': '♒️',
  'Balık': '♓️',
};

export const getZodiacEmoji = (sign: string): string => {
  return zodiacEmojis[sign] || '⭐️';
};