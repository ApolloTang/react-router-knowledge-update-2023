import React, { useEffect } from "react";
import {
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import { getContacts, createContact } from "~/contacts";

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

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


  useEffect(() => {
    // This solve the problem when you click back after a search,
    // the form field still has the value you entered even though
    // the list is no longer filtered.
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <Form
        id="search-form"
        /* without specifying method this is default to get, and get does not require action */
      >
        <input
          id="q"
          placeholder="Search"
          type="search"
          name="q"
          defaultValue={q}
          onChange={(e) => submit(e.currentTarget.form)}
        />
        <div
          id="search-spinner"
          aria-hidden
          hidden={!searching}
        />
      </Form>
      <br/>
      <br/>
        {JSON.stringify(contacts)}
    </>
  );
}
