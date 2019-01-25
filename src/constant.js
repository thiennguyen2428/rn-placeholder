export let allowAnimation = true;

export const stopAnimation = () => {
  allowAnimation = false;
}

export const startAnimation = () => {
  allowAnimation = true;
}
