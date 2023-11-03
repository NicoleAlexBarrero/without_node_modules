import useSWR from "swr";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import Error from "next/error";

const ArtworkCardDetail = ({ objectID }) => {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  }

  const {
    primaryImage,
    title,
    objectDate,
    classification,
    medium,
    artistDisplayName,
    artistWikidata_URL,
    creditLine,
    dimensions,
  } = data;

  return (
    <Card>
      {primaryImage && <Card.Img src={primaryImage} alt={title} />}

      <Card.Body>
        <Card.Title>{title || "N/A"}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {objectDate || "N/A"}
          <br />
          <strong>Classification:</strong> {classification || "N/A"}
          <br />
          <strong>Medium:</strong> {medium || "N/A"}
          <br />
          <br />
          <strong>Artist:</strong> {artistDisplayName || "N/A"}
          {artistDisplayName && artistWikidata_URL && (
            <a href={artistWikidata_URL} target="_blank" rel="noreferrer">
              wiki
            </a>
          )}
          <br />
          <strong>Credit Line:</strong> {creditLine || "N/A"}
          <br />
          <strong>Dimensions:</strong> {dimensions || "N/A"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArtworkCardDetail;
