//react
import { useState } from "react";
//dependencies
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//components
import Statement from "../../src/media/statement/statement";

//icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

//styles
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;

  width: 33%;
  margin: 1% 0;

  @media (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }
`;

//NEWS SECTION

const LatestPostNews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 98%;
  margin: 10px 0 30px 0;
  padding: 1%;

  cursor: pointer;

  background-color: ${(props) => props.bg};
  border-radius: 10px;
  overflow: hidden;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

const PostNews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 98%;
  margin: 1% 0;
  padding: 1%;

  cursor: pointer;

  background-color: ${(props) => props.bg};
  border-radius: 10px;
  overflow: hidden;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  margin: 5px 2% 0 2%;
  @media (max-width: 992px) {
    padding: 0 5px;
  }
`;

const CardEnd = styled.div`
  display: none;
  margin-bottom: 10px;
  margin: 5px 2% 0 2%;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 5px;
  }
`;

const TextWrapper = styled.div``;

const PostTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
`;

const PostDesc = styled.p`
  display: none;
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;

  overflow: hidden;

  @media (max-width: 992px) {
    display: flex;
    width: 100%;
  }
`;

const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const PostDate = styled.span`
  font-size: 12px;
  margin: auto 0;
`;

const ReadMore = styled.a`
  text-align: center;
  font-size: 14px;
  display: block;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 900;
  &:hover {
    color: #d43076;
  }
`;

// End of News

// Paper

const Paper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1% 0;
  padding: 20px 0;
  width: 66%;

  background-color: #efefef;
  border-radius: 10px;
  overflow: hidden;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Span = styled.strong`
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  margin-bottom: 20px;
  padding: 1%;

  border-radius: 30px;
  background-color: #efefef;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Left = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;

  background: ${(props) => (props.disabled ? "#dfdfdf" : "#d43076")};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
`;

const Right = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;

  background: ${(props) => (props.disabled ? "#dfdfdf" : "#d43076")};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
`;

const ArrowLeft = styled(FaArrowLeft)`
  color: #fff;
`;

const ArrowRight = styled(FaArrowRight)`
  color: #fff;
`;

const ViewPDFLink = styled.a`
  text-align: center;
  text-decoration: underline;
  font-size: 16px;
  margin-top: 10px;
  display: block;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 900;
  &:hover {
    color: #d43076;
  }
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const MediaStatement = () => {
  const sortedStatement = Statement.sort((a, b) => b.date - a.date);

  const latestPDF = sortedStatement[0];

  const [viewPDF, setViewPDF] = useState(latestPDF.id);

  const latestStatement = (
    <LatestPostNews
      key={latestPDF.id}
      onClick={() => setViewPDF(latestPDF.id)}
      bg={latestPDF.id === viewPDF ? "#efefef" : "#fff"}
    >
      <CardContent>
        <TextWrapper>
          <PostDetails>
            <PostDate>{latestPDF.date.toDateString()}</PostDate>
          </PostDetails>
          <PostTitle>{latestPDF.title}</PostTitle>
          <LineBreak />
          <PostDesc>{latestPDF.slug}</PostDesc>
        </TextWrapper>
      </CardContent>
      <CardEnd>
        <LineBreak />
        <ReadMore href={latestPDF.url} target="_blank">
          Read More
        </ReadMore>
      </CardEnd>
    </LatestPostNews>
  );

  const statementList = sortedStatement.slice(1).map((n) => {
    return (
      <PostNews
        key={n.id}
        onClick={() => setViewPDF(n.id)}
        bg={n.id === viewPDF ? "#efefef" : "#fff"}
      >
        <CardContent>
          <TextWrapper>
            <PostDetails>
              <PostDate>{n.date.toDateString()}</PostDate>
            </PostDetails>
            <PostTitle>{n.title}</PostTitle>
            <LineBreak />
            <PostDesc>{n.slug}</PostDesc>
          </TextWrapper>
        </CardContent>
        <CardEnd>
          <LineBreak />
          <ReadMore href={n.url} target="_blank">
            Read More
          </ReadMore>
        </CardEnd>
      </PostNews>
    );
  });

  const PDF = Statement.filter((e) => e.id === viewPDF);

  const path = `https://cors-anywhere.herokuapp.com/` + PDF[0].url;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Section>
      <Paper>
        <ButtonDiv>
          <Left type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            <ArrowLeft />
          </Left>
          <Span>
            Page {pageNumber} of {numPages}
          </Span>
          <Right
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            <ArrowRight />
          </Right>
        </ButtonDiv>
        <Document
          file={path}
          onLoadSuccess={onDocumentLoadSuccess}
          error={
            <div>
              <Span>Failed to Load PDF. </Span>
              <ViewPDFLink href={PDF[0].url} target="_blank">
                View PDF here
              </ViewPDFLink>
            </div>
          }
        >
          <Page width={750} pageNumber={pageNumber} />
        </Document>
      </Paper>
      <Items>
        <Span>Latest Statement:</Span>
        {latestStatement}
        <Span>Statements:</Span>
        {statementList}
      </Items>
    </Section>
  );
};

export default MediaStatement;
