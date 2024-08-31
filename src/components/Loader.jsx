import "bootstrap/dist/css/bootstrap.min.css";
const loader = () => {
    return (
    <>
    <div className=" flex items-center justify-center h-screen">
    <div className="spinner-border " role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  </div>
  </>)
  }

export default loader;