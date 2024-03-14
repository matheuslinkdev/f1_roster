const WorkInProgress = () => {
  return (
    <article style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "60dvh"
    }}>
      <h1>
        Work in progress...
      </h1>
      <p>
        Some infos are currently not available due API limitations.
      </p>
    </article>
  )
}

export default WorkInProgress