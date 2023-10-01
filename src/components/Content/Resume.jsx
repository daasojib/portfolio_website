import Container from "../Shared/Container";
import pdf from "../../assets/Web Developer.pdf";


const Resume = () => {
  return (
    <div>
      <Container>
        <object
          data={pdf}
          type="application/pdf"
          width="100%"
          style={{ height: "calc(100vh - 43px)" }}
          aria-label="This object displays an PDF file"
        >
          View PDF
        </object>
      </Container>
    </div>
  );
};

export default Resume;
