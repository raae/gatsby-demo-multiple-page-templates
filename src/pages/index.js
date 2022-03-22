import React from "react";

const IndexPage = () => {
  return (
    <main>
      <header>
        <h1>
          <span role="img" aria-label="Party popper emoji">
            🎉&nbsp;
          </span>
          Awsome Demo
          <span role="img" aria-label="Party popper emoji">
            &nbsp;🎉
          </span>
        </h1>
        <p>A demo for all the things!</p>
      </header>
      <section>
        <form>
          <fieldset>
            <label htmlFor="email">Your email address:</label>
            <input id="email" name="email" type="email" required />
            <button type="submit">Button</button>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default IndexPage;
