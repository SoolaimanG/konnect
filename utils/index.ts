//For Small Re-useable Components
export const regexForUrls =
  /^(https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

//To Handle Copying
export const handleCopying = async (res: string | number) => {
  await window.navigator.clipboard.writeText(res as string).then(() => {});
};
