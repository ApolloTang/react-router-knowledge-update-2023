import React from 'react'

import { Form, useLoaderData,
  useFetcher,
} from "react-router-dom";
import { getContact, updateContact } from "~/contacts";


export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}


export async function action( {request, params}) {
  let formData = await request.formData()
  // console.log('updating favorite')
  // throw Error('opps')  # demo update failure.
  return updateContact(
    params.contactId,
    { favorite: formData.get('favorite')  === 'true' }
  )
}


export default function Contact() {
  const { contact } = useLoaderData();
  // const contact = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "https://placekitten.com/g/200/200",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy" /* this will submit the Form to `contact/:contactId/destroy` */
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

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
