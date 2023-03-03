import { toast } from 'react-toastify';

export function showFailureNotification() {
  return toast.error(
    'Sorry, there are no images matching your search query. Please, try again.'
  );
}

export function showInfoNotification() {
  return toast.info(
    "We're sorry, but you've reached the end of search results."
  );
}

export function showSuccessNotification(totalFoundImages) {
  return toast.success(`Hooray! We found ${totalFoundImages} images.`);
}

export function showWarnNotification() {
  return toast.warn(
    `Sorry, you cannot make empty request. Please,write your request and try again`
  );
}
