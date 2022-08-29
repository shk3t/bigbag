export function extractErrorMessages(error) {
  const data = error.response.data;
  const status = error.response.status;
  const messages = [];

  function translate(word) {
    switch (word.toLowerCase()) {
      case "email":
        return "Эл. почта";
      case "password":
        return "Пароль";
    }
  }

  function decapitalize([first, ...rest]) {
    return first.toLowerCase() + rest;
  }

  if (data.detail) {
    messages.push(data.detail);
  } else {
    for (const [key, value] of Object.entries(data)) {
      messages.push(translate(key) + ": " + value[0]);
    }
  }

  return messages;
}
