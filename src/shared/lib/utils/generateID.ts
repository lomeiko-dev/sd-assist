const CHARACTERS = "0123456789";

export const generateID = (length: number) => {
  let result = "";
  const charactersLength = CHARACTERS.length;

  for (let i = 0; i < length; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }

  result += `/${CHARACTERS.charAt(Math.floor(Math.random() * charactersLength))}`;

  return result;
};
