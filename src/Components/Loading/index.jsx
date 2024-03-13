import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "25dvh",
      }}
    >
      <Spinner animation="border" role="status" />
      <span>Loading...</span>
    </div>
  );
}

export default Loading