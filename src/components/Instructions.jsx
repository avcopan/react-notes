export function Instructions() {
  return (
    // Either return a single element, or wrap it in a fragment
    // Fragments are marked with empty tags, <> and </>
    <>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      {/* This is a comment */}
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  );
}