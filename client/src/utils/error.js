export function extractErrorMessages(error) {
  const data = error.response.data;
  const status = error.response.status;
  const messages = [];

  if (data.detail) {
    messages.push(data.detail);
  } else {
    for (const [key, value] of Object.entries(data)) {
      // TODO translate key to russian
      messages.push(key + ": " + value);
    }
  }

  return messages;
}
