import React from "react";
import { Col, Row, Badge } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import { Author } from "../types/Content";

type AuthorProp = {
    author: Author
}
const AuthorBio: React.FC<AuthorProp> = ({author}) => {
  const { dictionary, loading, error } = useDictionary();
  console.log(dictionary, loading, error)
  if (loading || !dictionary) return <div>Loading Article...</div>;

 

  return (
   
     <div className="author-bio">
        <div className="author-bio-image">
            <img  src={author.image} alt={`{author.name} profile pic`}/>
        </div>
        <div className="author-bio-name">
            <p>{author.name}</p>
            <a href={author.link}>
                <Badge pill bg="dark">
                    GitHub <i className="bi bi-box-arrow-up-right"></i>
                </Badge>
            </a>
        </div>
        
    </div>
  );
};

export default AuthorBio;
