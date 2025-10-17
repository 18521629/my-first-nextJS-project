
export const isNonEmptyArray = (arr: unknown): boolean =>
    Array.isArray(arr) && arr.length > 0;
  
export const isNonEmptyString = (str: unknown): boolean =>
    typeof str === "string" && str.trim().length > 0;

export function isValidObject(object: unknown): boolean {
    return object !== undefined && object !== null;
}

export const isArray = (obj: unknown): boolean => {
    return obj !== undefined && obj !== null && obj.constructor === Array;
};

export const isNonEmptyObject = (object: unknown): boolean => isValidObject(object) && isNonEmptyArray(Object.keys(object));