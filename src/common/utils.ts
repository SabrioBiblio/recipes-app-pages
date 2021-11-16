export const update = <T,P>(oldObject: T, updatedProperties: P) => { 
  return { ...oldObject, ...updatedProperties } 
}