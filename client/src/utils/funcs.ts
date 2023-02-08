/**
 * Join CSS classes
 * @param {any[]} ...classNames list of classes passed as arguments
 * @return {string} a string that contains the classes separated by space
 * @example getClassNames('cls1', false && 'cls2', true && 'cls3') => 'cls1 cls3'
 */
export const getClassNames = (...classNames: any[]): string =>
  !classNames || !Array.isArray(classNames)
    ? ''
    : classNames.filter((el) => !!el && typeof el == 'string').join(' ');

/**
 * Get a substring of a string
 * @param {string} str the string to get the substring from
 * @param {number} maxChars the maximum number of characters to get
 * @return {string} a string that contains the substring
 * @example getSubstring('Hello World', 20) => 'Hello World'
 * @example getSubstring('Hello World', 5) => 'Hello..'
 */
export const getSubstring = (str: string, maxChars: number): string =>
  str.length > maxChars ? str.substring(0, maxChars) + '..' : str;
