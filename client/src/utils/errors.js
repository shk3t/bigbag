import { TRANSLATIONS } from "../consts";

export function extractErrorMessages(error) {
  if (!error.response) return ["Unexpected behavior"];
  const data = error.response.data;
  const status = error.response.status;
  if (status === 403) return ["Нет прав доступа"];
  if (status !== 400 && status !== 401) return ["Unexpected behavior"];
  const messages = [];


  function translate(word) {
    const translation = TRANSLATIONS[word.toLowerCase()];
    return translation || word;
  }

  // function decapitalize([first, ...rest]) {
  //   return first.toLowerCase() + rest;
  // }

  if (data.detail) {
    messages.push(data.detail);
  } else {
    for (const [key, value] of Object.entries(data)) {
      messages.push(translate(key) + ": " + value[0]);
    }
  }

  return messages;
}
