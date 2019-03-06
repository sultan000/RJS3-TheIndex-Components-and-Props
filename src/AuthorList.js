import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authorList = this.props.authors.map(author => (
      <AuthorCard key={author.first_name} person={author} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row"> {authorList} </div>
      </div>
    );
  }
}

export default AuthorList;
