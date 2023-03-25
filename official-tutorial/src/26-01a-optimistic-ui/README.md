# Optimistic UI update



```jsx
function Favorite({ contact }) {
  const fetcher = useFetcher()

  let favorite = contact.favorite;
  if (fetcher.formData) {
    // optimistic UI
    // -------------
    // We are optimistically assume the network will be successful.
    // We get the data from the form instead of from network.
    // In case, if  network fail, the UI will revert to
    // real data (The tutorial didnot said how this is done, but
    // I think it will render the nearest error. The next time
    // when user navigate to contact page the un updated
    // data will be render from the loader).

    favorite = fetcher.formData.get('favorite') === 'true'
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
```

