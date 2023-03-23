# How does the search-spnner know when to show





```jsx
function Root() {
  // code not shown
  

  // During submition (ie., navigation.state = 'loading'), the property `navigation.location`
  // tell you the next url. Once submition has complted (ie., navigation.state = 'idle'), the
  // property `navigation.location` is `undefined`. see:
  // https://reactrouter.com/en/main/hooks/use-navigation#navigationlocation


  console.log(navigation.state, navigation.location)

  // We can use this behaviour to set the variable called `searching`
  // to decide if we should show spinner during search submition.


  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  // code not shown

  return (
    <>
      <Form
        id="search-form"
        /* without specifying method this is default to get, and get does not require action */
      >
        /* code not shown */
        <div
          id="search-spinner"
          aria-hidden
          hidden={!searching}
        />
      </Form>
    </>
  );
}

```

